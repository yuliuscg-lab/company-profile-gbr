import { LocalMall } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

const CallToAction = () => {

    return(
        <Box component='section' sx={{p:{md:10,xs:4}, height:'auto', bgcolor:'secondary.main'}}>
            <Box sx={{display:'flex', justifyContent:'space-between', alignItems:{md:'center'}, flexDirection:{xs:'column',md:'row'}, gap:2}}>
                <Box sx={{width:{md:'50%',xs:'100%'}}}>
                    <Typography component='h3' sx={{textTransform:'uppercase', fontWeight:800, color:'white', fontSize:{xs:42, md:72}, lineHeight:1.2}}>
                        siap rasakan strike beruntun?
                    </Typography>
                    <Typography variant='body2' sx={{letterSpacing:1.5, color:'white'}}>
                        Pesan umpan Gembira sekarang dan buktikan sensasi strike tiada henti di spot favoritmu.
                    </Typography>                
                </Box>
                <Button variant='contained' sx={{maxHeight:'3em',p:2, bgcolor:'white', color:'text.secondary', fontWeight:'bold'}} endIcon={<LocalMall/>}> 
                    Pesan Sekarang
                </Button>
            </Box>            
        </Box>
    );
}

export default CallToAction;