import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import { Box, Button } from "@mui/material";

const SeeAll = () => {
    return (
        <Box sx={{display:'flex', justifyContent:'end'}}>
            <Button variant='text' endIcon={<KeyboardDoubleArrowRight/>} color='secondary' sx={{':hover':{bgcolor:'transparent', opacity:0.6}}} disableRipple>
            Lihat Semua
            </Button>
        </Box>
        
    )
}

export default SeeAll;  