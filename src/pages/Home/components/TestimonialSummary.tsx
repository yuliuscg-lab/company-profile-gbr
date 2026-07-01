import { Box } from "@mui/material";
import SummaryTitleTag from "../../../components/common/SummaryTitleTag";
import HomeContentData from "../../../data/home-content.data";
import ContentTitle from "../../../components/common/ContentTitle";
import ContentSummary from "../../../components/common/ContentSummary";
import TestimonialCard from "../../../components/common/TestimonialCard";
import { type TTestimonial } from "../../../data/testimonial.data";
import { useIsMobile } from "../../../hooks/useIsMobile";

type Props = {
    testimoniData:TTestimonial;
}

const TestimonialSummary = ({testimoniData}:Props) => {
    const contentData=HomeContentData[2];
    const isMobile = useIsMobile();
    const displayData = isMobile?testimoniData.slice(0,2):testimoniData;
    return (
        <Box component='section' sx={{height:'auto',p:{md:10, xs:4}}}>
            <Box sx={{width:{md:'50%',xs:'100%'}}}>
                <SummaryTitleTag title={contentData.title}/>
                <ContentTitle text={contentData.text}/>
                <ContentSummary summary={contentData.summary}/>
            </Box>
            <Box sx={{display:'flex', flexWrap:'wrap' ,gap:2, mt:2}}>
                    {
                    
                    displayData.map((testimonial)=>(
                        <TestimonialCard key={testimonial.id} testimoni={testimonial}/>
                    ))
                    }
                </Box>
        </Box>
    );
}

export default TestimonialSummary;