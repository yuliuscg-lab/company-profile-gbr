import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import FooterDisplayMenu from "./FooterDisplayMenu";
import GBRLogo from "../../../assets/logo-gembira/logo-gbr.png"
import { Copyright, Email, Facebook, Instagram, LocationOn, WhatsApp, YouTube } from "@mui/icons-material";

interface IFooterMenu {
    judul:string,
    menus: (string[] | IMenuObject[])
}
export type TFooterMenu=IFooterMenu;

interface IMenuObject {
    text:string,
    icon?: React.ReactNode
}
export type TMenuObject=IMenuObject;

const footerMenu:IFooterMenu[]=[
    {
        judul:'Navigasi',
        menus: ['Beranda', 'Tentang Kami', 'Produk', 'Tim', 'Artikel']
    },
    {
        judul:'Produk',
        menus: ['Mas Juara', 'Nila Strike', 'Lele Monster', 'Laut Pro']
    },
    {
        judul:'Kontak',
        menus: [
            {text:'Jl. ABC no. 8, Cimahi, Jawa Barat.', icon:<LocationOn color='secondary'/>},
            {text:'+62-8123-4567-890', icon:<WhatsApp color='secondary'/>},
            {text:'halo@gembira.co.id', icon:<Email color='secondary'/>}
        ]
    },
]

const Footer = () => {
    return (
        <Box component='section' sx={{maxWidth:'100vw'}}>
            <Grid container spacing={2} sx={{mb:2}}>
                <Grid size={4}>
                    <Box component='img' src={GBRLogo} alt='logo gbr' sx={{width:{xs:'75px',md:'125px'}, mt:6, ml:{md:8,xs:4}}}/>
                    <Box sx={{display:'flex', pl:{md:8, xs:2}, alignItems:'center'}}>
                        <IconButton aria-label='instagram'>
                            <Instagram fontSize="small" color='secondary'/>
                        </IconButton>
                        <IconButton>
                            <YouTube fontSize="small" color='secondary'/>
                        </IconButton>
                        <IconButton>
                            <Facebook fontSize="small" color='secondary'/>
                        </IconButton>
                    </Box>
                </Grid>
                <Grid size={2} sx={{display:{xs:'none',md:'block'}}}>
                    <FooterDisplayMenu item={footerMenu[0]}/>
                </Grid>
                <Grid size={2}sx={{display:{xs:'none',md:'block'}}}>
                    <FooterDisplayMenu item={footerMenu[1]}/>
                </Grid>
                <Grid size={{md:4,xs:8}} sx={{px:{md:0,xs:2}}}>
                    <FooterDisplayMenu item={footerMenu[2]}/>
                </Grid>
            </Grid>
            <Divider/>
            <Box sx={{display:'flex', justifyContent:'space-between', p:2, height:'auto'}}>
                <Typography sx={{fontSize:'14px'}}>
                    <Copyright sx={{fontSize:'small'}} /> 2026 Gembira. Semua hak dilindungi.
                </Typography>
                <Typography sx={{fontSize:'14px', display:{xs:'none', md:'block'}}}>
                    Diproduksi dengan bangga di Indonesia.
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer;