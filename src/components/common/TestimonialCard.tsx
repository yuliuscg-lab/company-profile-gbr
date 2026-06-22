import { ArrowOutward, Star } from "@mui/icons-material";
import { Card, CardContent, Typography, Divider, Box, IconButton} from "@mui/material";
import type { ITestimonial } from "../../data/testimonial.data";
import QuoteImg from '../../assets/quote.png';

type Props = {
    testimoni:ITestimonial;
}

const TestimonialCard = ({testimoni}:Props) => {
    return (
        <Card sx={{ maxWidth: 304, minHeight:320 ,margin: 'auto', border:2, borderColor:'secondary.main', transition: '0.3s', borderRadius:'16px', bgcolor:'#ebf3ff' }}> 
            <CardContent sx={{px:3}}>
                {/* <ReviewsOutlined color='secondary' fontSize="large"/> */}
                <Box component='img' alt='quote'src={QuoteImg} color='secondary' sx={{maxWidth:'4em'}}/>
                <Box sx={{display:'flex', pb:1}}>
                    <Star color='secondary'/>
                    <Star color='secondary'/>
                    <Star color='secondary'/>
                    <Star color='secondary'/>
                    <Star color='secondary'/>
                </Box>
                <Box sx={{minHeight:125}}>
                    <Typography variant="h6" sx={{textTransform:'capitalize', fontSize:16, opacity:0.6}}>
                    {testimoni.testimoni}
                    </Typography>
                </Box>
                <Divider sx={{ my: 1, border:1, borderColor: 'rgba(0, 0, 0, 0.12)' }} />
                <Box 
                    sx={{ 
                        display: 'flex', 
                        justifyContent:'space-between',
                        alignItems: 'center',           
                        mt: 1,
                    }}
                >
    
                    <Box>
                        <Typography variant="body1" color="secondary" sx={{ fontWeight: "bold", fontSize: 24, lineHeight: 1.2 }}>
                            {testimoni.nama} 
                        </Typography>
                        <Box component="span" sx={{ fontSize: '0.8rem', color: 'text.primary', fontWeight:'bold'}}>
                            {testimoni.role}, {testimoni.asal}
                        </Box>
                    </Box>

                    <IconButton aria-label='lihat detail' color="secondary" sx={{border:1}}>
                        <ArrowOutward/>
                    </IconButton>
                </Box>
            </CardContent>
        </Card>
    )
}

export default TestimonialCard;