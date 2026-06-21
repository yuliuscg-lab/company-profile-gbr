import { Box, Button, Typography } from "@mui/material";
import HeroImg from "../../../assets/hero-image/hero-image.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StatItem from "./StatItem";

const stats = [
    {value:10, label:'+', desc:'Tahun Pengalaman'},
    {value:10, label:'jt+', desc:'Item Terjual'},
    {value:300, label:'+', desc:'Juara Lomba'},
    {value:4.9, label:'/5', desc:'Rating Pelanggan'}
];

const Hero = () => {
    return (
        <Box component='section' sx={{position:'relative'}}>
            <Box component='img' src={HeroImg} aria--label='hero image' sx={{width:'100%',height:'100vh', display:'block', pt:6}}/>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to right, rgba(255,255,255,1) 30%, rgba(255,255,255,0) 80%),linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 40%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent:'center',
                    alignItems: 'start',
                    px: { xs: 4, md: 10 },
                }}
            >
                <Typography variant="h2" color='primary' sx={{fontWeight:'bold' }}>SEKALI LEMPAR,</Typography>
                <Typography variant="h2" color='secondary'sx={{fontWeight:'bold'}}>LANGSUNG STRIKE.</Typography>
                <Typography variant="h6" color='primary' sx={{opacity:0.6, width:'50%',fontSize:'light'}}>Pelet pancing yang teruji di lapangan untuk ikan mas, nila, lele, tawes, mujair, dan patin. Aroma memikat, tekstur sempurna, hasil tak terbantahkan.</Typography>
                <Box sx={{display:'flex', gap:2, pt:2}}>
                    <Button variant='contained' color='secondary' endIcon={<ArrowForwardIcon/>} size='large'>
                        Lihat Produk
                    </Button>
                    <Button variant='outlined' color='primary' size='large'>
                        Kenali Kami
                    </Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4, pt: 6 }}>
                    {stats.map((stat) => (
                        <StatItem key={stat.desc} {...stat} />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default Hero;