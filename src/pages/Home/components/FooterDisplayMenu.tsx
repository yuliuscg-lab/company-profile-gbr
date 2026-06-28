import { Box, Button} from "@mui/material";
import { type TFooterMenu} from './Footer';

type Props = {
    item:TFooterMenu;
}


const FooterDisplayMenu = ({item}:Props) => {
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