import { LocalMall } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

const CallToAction = () => {

    return(
        <Box component='section' sx={{p:10, height:'auto', bgcolor:'secondary.main'}}>
            <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <Box sx={{width:'50%'}}>
                    <Typography variant='h3' sx={{textTransform:'uppercase', fontWeight:800, color:'white'}}>
                        siap rasakan strike beruntun?
                    </Typography>
                    <Typography variant='body1' sx={{letterSpacing:1.5, color:'white'}}>
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