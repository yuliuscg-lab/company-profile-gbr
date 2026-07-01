import { Box, Card, CardContent, CardMedia, Divider, IconButton, Typography } from "@mui/material";
import {type IProduct} from "../../data/product.data";
import { ArrowOutward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routePaths";

type Props = {
    product:IProduct;
}

const ProductCard = ({product}:Props) => {
    const navigate = useNavigate();
    return (
        <Card sx={{ maxWidth: 304, margin: 'auto', boxShadow: '0 0 20px 0 rgba(0,0,0,0.12)', transition: '0.3s', borderRadius:'16px' }}>
            <CardMedia
                component="img"
                height="250"
                image={product.productImg}
                alt={product.productName}
            />
            <CardContent sx={{px:3}}>
                <Typography variant="h6" sx={{fontWeight:"bold", textTransform:'uppercase', fontSize:20}}>
                    {product.productName}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{fontSize:16}}>
                    {product.productBrief}
                </Typography>
                <Divider sx={{ my: 1, border:1, borderColor: 'rgba(0, 0, 0, 0.12)' }} />
                <Box 
                    sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        alignItems: 'center',           
                        mt: 1 
                    }}
                >
    
                    <Box>
                        <Typography variant="body1" color="secondary" sx={{ fontWeight: "bold", fontSize: 24, lineHeight: 1.2 }}>
                            {product.productPrice} 
                        </Typography>
                        <Box component="span" sx={{ fontSize: '0.8rem', color: 'text.primary', fontWeight:'bold' }}>
                            /{product.productUom}
                        </Box>
                    </Box>

                    <IconButton aria-label='lihat detail' color="secondary" sx={{border:1}} onClick={()=>navigate(ROUTES.PRODUCTS)}>
                        <ArrowOutward/>
                    </IconButton>
                </Box>
            </CardContent>
        </Card>
    );
}

export default ProductCard;