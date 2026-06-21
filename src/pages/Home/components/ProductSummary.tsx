import { Box } from "@mui/material";
import ProductCard from "../../../components/common/ProductCard";
import { type TProduct } from "../../../data/product.data";
import ContentTitle from "../../../components/common/ContentTitle";
import HomeContentData from "../../../data/home-content.data";
import SummaryTitleTag from "../../../components/common/SummaryTitleTag";
import ContentSummary from "../../../components/common/ContentSummary";
import SeeAll from "../../../components/common/SeeAll";

type Props = {
    ProductDatas:TProduct;
}

const ProductSummary = ({ProductDatas}:Props) => {
    const contentData = HomeContentData[1];
    return (
        <Box component='section' sx={{height:'auto', p:10, bgcolor:'#ebf3ff'}}>
            <SummaryTitleTag title={contentData.title}/>
            <ContentTitle text={contentData.text}/>
            <ContentSummary summary={contentData.summary}/>
            <SeeAll/>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'space-evenly'}}>
                {ProductDatas.map((data) => (
                    <ProductCard key={data.id} product={data} />
                ))}
            </Box>
        </Box>
        
    )
}

export default ProductSummary;