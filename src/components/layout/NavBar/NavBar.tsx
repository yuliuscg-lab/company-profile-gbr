import { alpha, AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes/routePaths";
import logoImage from "../../../assets/logo-gembira/logo-gbr.png";



const navItems = [
    { label: 'Home', path:ROUTES.HOME},
    { label: 'About', path:ROUTES.ABOUT},
    { label: 'Products', path:ROUTES.PRODUCTS},
    { label: 'Articles', path:ROUTES.ARTICLES}
]

const NavBar=()=> {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <AppBar position="fixed" elevation={0} sx={{bgcolor: alpha('#ffffff', 0.75), color:'text.primary', boxShadow:'none', backdropFilter:'blur(16px)', WebkitBackdropFilter:'blur(16px)'}}>
            <Container maxWidth={false} sx={{px:4}}>
                <Toolbar>
                    <Box 
                        component="img"
                        src={logoImage}
                        aria-label="MyBrand Logo"
                        sx={{ height: 40, width: 'auto', mx:2}}/>
                    <Typography variant="h6" color='primary' sx={{ flexGrow: 1, fontWeight:900, lineHeight:'1.4em',letterSpacing:-0.025}}>GEMBIRA</Typography>
                        <Box component="nav" sx={{ display: 'flex', gap: 2 }}>
                            {
                                navItems.map((item)=>{
                                    const isActive = location.pathname === item.path;

                                    return(<Button
                                        onClick={()=> navigate(item.path)}
                                        key={item.label}
                                        aria-label={item.label}
                                        component={Link}
                                        to={item.path}
                                        variant="text" 
                                        sx={{color:'text.primary',
                                            borderBottom:isActive?"2px solid":"2px solid transparent",
                                            borderColor:isActive?'#1976D2':'transparent'
                                        }}
                                        >
                                        {item.label}
                                    </Button>)}
                                )
                            }
                        </Box>
            </Toolbar>  
            </Container>
        </AppBar>

    )
};

export default NavBar;