import { Box } from "@mui/material";
import SummaryTitleTag from "../../../components/common/SummaryTitleTag";
import HomeContentData from "../../../data/home-content.data";
import ContentTitle from "../../../components/common/ContentTitle";
import ContentSummary from "../../../components/common/ContentSummary";
import TestimonialCard from "../../../components/common/TestimonialCard";
import { type TTestimonial } from "../../../data/testimonial.data";

type Props = {
    testimoniData:TTestimonial;
}

const TestimonialSummary = ({testimoniData}:Props) => {
    const contentData=HomeContentData[2];
    return (
        <Box component='section' sx={{height:'auto',p:10}}>
            <Box sx={{width:'50%'}}>
                <SummaryTitleTag title={contentData.title}/>
                <ContentTitle text={contentData.text}/>
                <ContentSummary summary={contentData.summary}/>
            </Box>
            <Box sx={{display:'flex', gap:2, mt:2}}>
                    {
                    testimoniData.map((testimonial)=>(
                        <TestimonialCard testimoni={testimonial}/>
                    ))
                    }
                </Box>
        </Box>
    );
}

export default TestimonialSummary;