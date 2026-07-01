import { Card, CardActionArea, CardMedia, CardContent, Typography, Box } from "@mui/material";
import type { IArticles } from "../../Articles/ArticlesPage";
import { useNavigate } from "react-router-dom";


type Props = {
    article:IArticles;
}

const getExcerpt = (htmlContent: string|undefined|null) => {
        if(!htmlContent) return "";
        const plainText = htmlContent.replace(/<[^>]*>/g, ''); 

        if (plainText.length > 200) {
            return plainText.substring(0, 150) + "...";
        }
        return plainText;
    };

const ArticleCard = ({article}:Props) => {

    const navigate=useNavigate();

    return (
        <Card sx={{ maxWidth: 320, borderRadius:8,}}>
            <CardActionArea
                onClick={()=> navigate(`/articles/${article.objectId}`)} 
                sx={{
                    flexGrow:1, 
                    display:'flex',
                    flexDirection: "column",
					alignItems: "stretch",
					justifyContent: "flex-start",
                    height: "100%",
                    }}>
                <CardMedia
                component="img"
                height="220"
                image={article.img_url}
                alt="article"
                />
                <CardContent sx={{px:3}}>
                <Box sx={{display:'flex', gap: 1, alignItems:'center', py:1}}>
                    <Typography sx={{fontWeight:"bold",color:"text.secondary",fontSize:16}}>
                        {article.category}  
                    </Typography>
                    &bull;
                    <Typography sx={{fontSize:16, opacity:0.7}}>
                        {article.reading_time} menit baca
                    </Typography>
                </Box>
                <Typography gutterBottom sx={{fontSize:20, fontWeight:'bold'}}>
                    {article.title}
                </Typography>
                <Box sx={{display:'flex', flexDirection:'column',justifyContent:'space-evenly'}}>
                    <Typography variant="body2" color="text.secondary" sx={{ my: 1}}>
                        {getExcerpt(article.content)}<br/>
                        
                    </Typography>
                    <Box component='span' sx={{fontWeight:'bold', color:'text.secondary', fontSize:18 }}> Baca selengkapnya</Box>
                </Box>
                
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ArticleCard;