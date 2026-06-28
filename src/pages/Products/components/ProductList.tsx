import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import ProductData from "../../../data/product.data";
import SummaryTitleTag from "../../../components/common/SummaryTitleTag";
import ContentTitle from "../../../components/common/ContentTitle";
import ContentSummary from "../../../components/common/ContentSummary";
import { CheckCircle, WhatsApp } from "@mui/icons-material";

const ProductList = () => {
    return (
        <Box component='section' sx={{height:'auto', p:{xs:4,md:10}, bgcolor:'#ebf3ff'}}>
            {
                ProductData.map((product, index)=> (
                    <Box sx={{
                        display:'flex',
                        flexDirection:{md:'row',xs:'column'}, 
                        gap:4, 
                        mt:{md:index===0?0:6, xs:index===0?0:6}}}>
                        <Box>
                            <Box 
                                component='img'
                                alt={`product ${index}`} 
                                src={product.productImg} 
                                sx={{
                                    width:{md:'40rem',xs:'100%'},
                                    aspectRatio:'12/9',
                                    borderRadius:'16px',
                                    objectFit:'cover',
                                    objectPosition:'center',
                                    display:'block'
                                    }}/>
                        </Box>
                        <Box>
                            <SummaryTitleTag title={product.productTag}/>
                            <ContentTitle text={product.productName}/>
                            <Typography sx={{my:2, fontWeight:'bold', color:'text.secondary'}}>
                                {product.productBrief}
                            </Typography>
                            <ContentSummary summary={product.productDesc}/>
                            <Box sx={{my:2}}>
                                {
                                product.productStrength.map((strength,index)=>(
                                    <Box key={index} sx={{display:'flex', gap:2,mb:1}}>
                                        <CheckCircle sx={{color:'text.secondary'}}/>
                                        <Typography>
                                            {strength}
                                        </Typography>
                                    </Box>
                                ))
                                }
                            </Box>
                            <Card sx={{borderRadius:'16px', px:2, py:1}}>
                                <CardContent sx={{display:'flex', justifyContent:'space-between'}}>
                                    <Box>
                                        <Typography sx={{fontSize:36, fontWeight:'bold', color:'text.secondary'}}>
                                            {product.productPrice}
                                        </Typography>
                                        <Typography sx={{fontSize:16, fontWeight:'bold'}}>
                                            {product.productUom}
                                        </Typography>
                                    </Box>
                                    <CardActions>
                                        <Button variant="contained" endIcon={<WhatsApp/>} size='large' sx={{bgcolor:'secondary.main', color:'white'}}>
                                            Pesan Sekarang
                                        </Button>
                                    </CardActions>

                                </CardContent>
                            </Card>


                        </Box>
                    </Box>
                    
                ))
            }
            
        </Box>
    )
}

export default ProductList;