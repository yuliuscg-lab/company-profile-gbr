import { Box, Button, Card, CardContent, CardMedia, Skeleton, Typography } from "@mui/material";
import backendlessApi from "../../../config/axios.config";
import { useMemo } from "react";
import { ArrowForward, AutoAwesome } from "@mui/icons-material";
import SummaryTitleTag from "../../../components/common/SummaryTitleTag";
import ArticleCard from "./ArticleCard";
import { formatDate } from "../../../utils/formatDate";
import type { IArticles } from "../../Articles/ArticlesPage";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const ArticleList = () => {
    const navigate = useNavigate();
    const fetchParams = useMemo(() => ({
        params: {
            where: "article_status = 'Published'"
        }
    }), []);

    const { data: articles, isLoading, error } = useQuery({
        queryKey: ['articles', fetchParams],
        queryFn: async () => {
            const response = await backendlessApi.get("/Articles", fetchParams);
            return response.data as IArticles[];
        },
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: true,
        });

    //SKELETON LOADING FETCH DATA
    if (isLoading) {
        return (
            <Box component='section' sx={{ p: { xs: 4, md: 10 }, bgcolor: '#ebf3ff' }}>
                <Card sx={{ maxWidth: '100%', height: 500, borderRadius: 16, overflow: 'hidden', display: 'flex', gap: 2 }}>
                    <Skeleton variant="rectangular" width="50%" height="100%" animation="wave" />
                    <Box sx={{ py: 4, flex: 1 }}>
                        <CardContent sx={{ pl: 4, pr: 8 }}>
                            <Skeleton variant="rectangular" width={160} height={32} sx={{ borderRadius: '16px', mb: 2 }} animation="wave" />
                            <Skeleton variant="text" width="90%" height={50} sx={{ mb: 1 }} animation="wave" />
                            <Skeleton variant="text" width="60%" height={50} sx={{ mb: 2 }} animation="wave" />
                            <Skeleton variant="text" width="95%" height={24} animation="wave" />
                            <Skeleton variant="text" width="95%" height={24} animation="wave" />
                            <Skeleton variant="text" width="40%" height={24} sx={{ mb: 4 }} animation="wave" />
                            <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                                <Skeleton variant="text" width={80} height={24} animation="wave" />
                                <Skeleton variant="text" width={100} height={24} animation="wave" />
                                <Skeleton variant="text" width={120} height={24} animation="wave" />
                            </Box>
                            <Skeleton variant="text" width={150} height={30} animation="wave" />
                        </CardContent>
                    </Box>
                </Card>

                <Box sx={{ mt: 8 }}>
                    <SummaryTitleTag title="Semua Artikel" />
                    <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                        {Array.from(new Array(4)).map((_, index) => (
                            <Card key={index} sx={{ width: 345, borderRadius: 8, height: 450 }}>
                                <Skeleton variant="rectangular" width="100%" height={220} animation="wave" />
                                <CardContent sx={{ px: 3 }}>
                                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', py: 1, mb: 1 }}>
                                        <Skeleton variant="text" width={80} height={24} animation="wave" />
                                        <Skeleton variant="text" width={100} height={24} animation="wave" />
                                    </Box>
                                    <Skeleton variant="text" width="90%" height={32} animation="wave" />
                                    <Skeleton variant="text" width="70%" height={32} sx={{ mb: 2 }} animation="wave" />
                                    <Skeleton variant="text" width="100%" height={20} animation="wave" />
                                    <Skeleton variant="text" width="100%" height={20} animation="wave" />
                                    <Skeleton variant="text" width="40%" height={20} animation="wave" />
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </Box>
            </Box>
        );
    }
    if (error) return <p>Error: {error.message}</p>;
    if (!articles) return null;


    const chosenArticle=articles[0];

    {/*Membersihkan variabel content dari tag html */}
const getExcerpt = (htmlContent: string|undefined|null) => {
        // Menghapus semua tag HTML seperti <p>, <strong>, dll
        if(!htmlContent) return "";
        const plainText = htmlContent.replace(/<[^>]*>/g, ''); 

        if (plainText.length > 200) {
            return plainText.substring(0, 200) + "...";
        }
        return plainText;
    };

    return (
        <Box component='section' sx={{ p: { xs: 2, md: 10 }, bgcolor: '#ebf3ff' }}>
            {/* Artikel Pilihan */}
            <Card sx={{ maxWidth: '100%', height:{lg:500,md:'auto'}, borderRadius: 16, overflow: 'hidden', display:'flex', gap:2,flexDirection:{xs:'column',md:'row'}}}>
                <CardMedia
                    component="img"
                    height="full" 
                    image={chosenArticle.img_url}
                    alt={chosenArticle.title}
                    sx={{ objectFit: 'cover', width:{md:'50%',xs:'100%'},aspectRatio:'16/9',objectPosition:'top'}}
                />
                <Box sx={{py:{md:4,xs:2},flexGrow:1}}>
                    <CardContent sx={{pl:4, pr:{lg:8,md:4, xs:4}}}>
                    <Box 
                        sx={{borderRadius:'16px',
                            bgcolor:'#b0d3f7',
                            color: '#0d47a1',     
                            px: 2,               
                            py: {md:0.5,xs:0},            
                            display: 'inline-flex',
                            fontSize: {xs:'0.8rem',md:'0.85rem'},
                            fontWeight: 'bold',
                            alignItems: 'center',
                            justifyContent:'center',
                            gap:'4px',
                            borderColor:'#0d47a1',
                            border:1,
                            mb:2,
                            textTransform:'uppercase',
                            whiteSpace:'nowrap'
                            }}>
                            <AutoAwesome sx={{fontSize:'medium', color:'yellow'}}/>
                                ARTIKEL PILIHAN
                    </Box> 
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mt:{md:1,xs:0}, textTransform:'uppercase', fontSize:{lg:36,md:26,xs:20}, mb:{lg:2,md:1,xs:0}}}>
                        {chosenArticle.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ my: {md:2,xs:1}, fontSize:{lg:18,md:16,xs:15} }}>
                        {getExcerpt(chosenArticle.content)}
                    </Typography>
                    <Box sx={{display:'flex', gap:2, alignItems:'center'}}>
                        <Typography sx={{fontWeight:"bold",color:"text.secondary",fontSize:{lg:20,md:17,xs:14}}}>
                            {chosenArticle.category}
                        </Typography>
                            &bull;
                        <Typography sx={{fontSize:{lg:18, md:16, xs:12}, opacity:0.7}}>
                            {formatDate(chosenArticle.published_at)}
                        </Typography>
                            &bull;
                        <Typography sx={{fontSize:{lg:18, md:16, xs:12}, opacity:0.7}}>
                            {chosenArticle.reading_time} menit baca
                        </Typography>
                    </Box>
                    <Button
                        onClick={()=>navigate(`/articles/${chosenArticle.objectId}`)}
                        endIcon={<ArrowForward/>}
                        variant='text'
                        disableRipple
                        sx={{
                            my:{lg:2,md:2,xs:0},
                            color:'text.secondary', 
                            fontWeight:'bold', 
                            textTransform:'none', 
                            fontSize:{lg:18,md:16,xs:14},
                            ':hover':{bgcolor:'transparent'},
                            }}>
                        Baca selengkapnya
                    </Button>
                </CardContent>
                </Box>
            </Card>

        <Box sx={{mt:8}}>
            <SummaryTitleTag title="Semua Artikel"/>
            <Box sx={{display:'flex',gap:2,flexWrap:'wrap', justifyContent:{md:'flex-start',xs:'center'},}}>
                {
                articles.map((data)=>(
                    <ArticleCard key={data.objectId} article={data}/>
                ))
                }
            </Box>
            
        </Box>
    </Box>
    )
}

export default ArticleList;