import { Box } from "@mui/material"
import SummaryTitleTag from "../../../components/common/SummaryTitleTag"
import ContentTitle from "../../../components/common/ContentTitle"
import ContentSummary from "../../../components/common/ContentSummary"


const AboutBrief = () => {
    return (
        <Box component='section' sx={{height:'auto', p:{xs:4,md:10}}}>
            <Box sx={{width:{xs:'100%',md:'50%'}}}>
                <SummaryTitleTag title={"tentang kami"}/>
                <ContentTitle text={"Diracik pemancing, untuk pemancing"}/>
                <ContentSummary summary={"Gembira bukan sekadar merek umpan. Kami adalah komunitas yang terobsesi menghadirkan sensasi strike terbaik di setiap lemparan."}/>
            </Box>  
        </Box>

    )
}

export default AboutBrief