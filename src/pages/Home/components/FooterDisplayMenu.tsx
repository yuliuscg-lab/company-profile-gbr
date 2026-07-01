import { Box, Button} from "@mui/material";
import { type TFooterMenu} from './Footer';
import { useNavigate } from "react-router-dom";

type Props = {
    item:TFooterMenu;
}


const FooterDisplayMenu = ({item}:Props) => {
    const navigate = useNavigate();
    return (
        <Box sx={{pt:{xs:2,md:4}}}>
                        <Box sx={{display:'flex',flexDirection:'column', justifyContent:'flex-start'}}>
                            <Box component='h5' sx={{fontWeight:'bold',mb:1, textTransform:'uppercase', fontSize:18 }}>
                                    {item.judul}
                            </Box>
                                {
                                item.menus.map((menu, menuIndex) => {
                                    const isObject = typeof menu !== 'string';
                                    const labelText = isObject?menu.text:menu;
                                    const leadingIcon = isObject?menu.icon:undefined;
                                return (
                                    <Button
                                    onClick={()=> {
                                        const targetPath = item.path[menuIndex];

                                        if (targetPath.startsWith('http') || targetPath.startsWith('mailto:')) {
                                            window.open(targetPath, '_blank', 'noopener,noreferrer');
                                        } else {
                                            navigate(targetPath);
                                        }
                                    }} 
                                    key={menuIndex} 
                                    variant='text'
                                    disableRipple
                                    startIcon={leadingIcon} 
                                    sx={{display:'flex', 
                                        fontSize:'14px', 
                                        width:'fit-content',
                                        textTransform:'none',
                                        justifyContent:'flex-start',
                                        ':hover':{bgcolor:'transparent',
                                        }}}>{labelText}</Button>
                                )})
                                }  
                        </Box>
        </Box>
    )
}

export default FooterDisplayMenu;