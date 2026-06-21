import { Box } from "@mui/material";
import SummaryTitleTag from "../../components/common/SummaryTitleTag";
import HomeContentData from "../../data/home-content.data";
import ContentTitle from "../../components/common/ContentTitle";
import ContentSummary from "../../components/common/ContentSummary";

const TestimonialSummary = () => {
    const contentData=HomeContentData[2];
    return (
        <Box component='section' sx={{height:'auto',p:10}}>
            <Box sx={{width:'50%'}}>
                <SummaryTitleTag title={contentData.title}/>
                <ContentTitle text={contentData.text}/>
                <ContentSummary summary={contentData.summary}/>
            </Box>
            
        </Box>
    );
}

export default TestimonialSummary;