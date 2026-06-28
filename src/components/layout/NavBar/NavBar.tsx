import { alpha, AppBar, Box, Button, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoImage from "../../../assets/logo-gembira/logo-gbr.png";
import { Close, Menu } from "@mui/icons-material";
import { useState } from "react";
import { navItems } from "../../../data/navigations.data";


const NavBar=()=> {
    const location = useLocation();
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <AppBar position="fixed" elevation={0} sx={{bgcolor: alpha('#ffffff', 0.75), color:'text.primary', boxShadow:'none', backdropFilter:'blur(16px)', WebkitBackdropFilter:'blur(16px)'}}>
            <Container maxWidth={false} sx={{px:{md:4, xs:0}}}>
                <Toolbar>
                    <Box 
                        component="img"
                        src={logoImage}
                        aria-label="MyBrand Logo"
                        sx={{ height: 40, width: 'auto', mx:2}}/>
                    <Typography variant="h6" color='primary' sx={{ flexGrow: 1, fontWeight:900, lineHeight:'1.4em',letterSpacing:-0.025}}>GEMBIRA</Typography>
                        <IconButton sx={{display:{xs:'block',md:'none', color:'black'}}} onClick={()=>setIsOpen(!isOpen)}>
                            {
                                isOpen? <Close fontSize='large'/>:<Menu fontSize="large"/>
                            }
                        </IconButton>
                        {/*Menu Desktop*/}
                        <Box component="nav" sx={{ display:{xs:'none',md:'block'}, gap: 2 }}>
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
            {/*Menu mobile */}
            <Drawer anchor="right" open={isOpen} onClose={()=>setIsOpen(!isOpen)} sx={{width:250,  '& .MuiDrawer-paper': {
            width: 250}}}>
            <List>
                {
                    navItems.map((item,i)=>{
                        const isActive = location.pathname === item.path; 
                        
                        return(
                        <ListItem key={i} disablePadding>
                            <ListItemButton onClick={()=>{navigate(item.path);setIsOpen(!isOpen);}} 
                                            sx={{ 
                                                borderLeft:isActive?"5px solid":"2px solid transparent",
                                                borderColor:isActive?'#1976D2':'transparent'}}>
                                <ListItemText primary={item.label}/>
                            </ListItemButton>
                        </ListItem>
                    )})
                }
            </List>

        </Drawer>
        </AppBar>

    )
};

export default NavBar;