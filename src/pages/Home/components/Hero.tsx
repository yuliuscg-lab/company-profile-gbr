import { Box, Button, Typography } from "@mui/material";
import HeroImg from "../../../assets/hero-image/hero-image.png";
import HeroImgMobile from "../../../assets/hero-image/hero-image-mobile.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StatItem from "./StatItem";
import { useIsMobile } from "../../../hooks/useIsMobile";

const stats = [
    {value:10, label:'+', desc:'Tahun Pengalaman'},
    {value:10, label:'jt+', desc:'Item Terjual'},
    {value:300, label:'+', desc:'Juara Lomba'},
    {value:4.9, label:'/5', desc:'Rating Pelanggan'}
];

const Hero = () => {
    
    const isMobile = useIsMobile();
    return (
        <Box component='section' sx={{position:'relative', height:'100vh'}}>
            <Box component='img' src={isMobile?HeroImgMobile:HeroImg} aria--label='hero image' 
                sx={{width:'100%',
                    height:'100%',
                    display:'block',
                    }}/>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: {
                                    md:'linear-gradient(to right, rgba(255,255,255,1) 30%, rgba(255,255,255,0) 80%),linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 40%)',
                                    xs:'linear-gradient(to top, rgba(255,255,255,1) 40%, rgba(255,255,255,0) 80%),linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 40%)'
                                }
                    ,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent:'center',
                    alignItems: 'start',
                    px: { xs: 4, md: 10 },
                    pt: {xs:10,md:0}
                }}
            >
                <Typography component="h2" color='primary' sx={{fontWeight:'900', fontSize:{xs:'56px', md:'72px'}, lineHeight:1.2}}>SEKALI LEMPAR,</Typography>
                <Typography component="h2" color='secondary'sx={{fontWeight:'900', fontSize:{xs:'56px', md:'72px'}, lineHeight:1.2}}>LANGSUNG STRIKE.</Typography>
                <Typography component="h6" color='primary' sx={{opacity:0.6, width:{xs:'80%',md:'50%'},fontSize:{xs:'18px', md:'20px'}, lineHeight:1.3}}>Pelet pancing yang teruji di lapangan untuk ikan mas, nila, lele, tawes, mujair, dan patin. Aroma memikat, tekstur sempurna, hasil tak terbantahkan.</Typography>
                <Box sx={{display:'flex', gap:2, mt:{xs:4,md:2}}}>
                    <Button variant='contained' color='secondary' endIcon={<ArrowForwardIcon/>} size='large'>
                        Lihat Produk
                    </Button>
                    <Button variant='outlined' color='primary' size='large' sx={{bgcolor:'white'}}>
                        Kenali Kami
                    </Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap:{xs:3, md:4} , pt:2, width:{xs:'75%'}, flexWrap:'wrap'}}>
                    {stats.map((stat) => (
                        <StatItem key={stat.desc} {...stat} />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default Hero;