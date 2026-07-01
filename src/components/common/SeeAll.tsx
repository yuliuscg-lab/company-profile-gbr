import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routePaths";

const SeeAll = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{display:'flex', justifyContent:'end'}}>
            <Button variant='text'
                onClick={()=> navigate(ROUTES.PRODUCTS)}
                endIcon={<KeyboardDoubleArrowRight/>} 
                color='secondary' 
                sx={{':hover':{bgcolor:'transparent', opacity:0.6}}} 
                disableRipple>
            Lihat Semua
            </Button>
        </Box>
        
    )
}

export default SeeAll;  