import { Box } from "@mui/material";
import SummaryTitleTag from "../../../components/common/SummaryTitleTag";
import ContentTitle from "../../../components/common/ContentTitle";
import ContentSummary from "../../../components/common/ContentSummary";

const ArticlesBrief = () => {
    return (
        <Box component='section' sx={{height:'auto', p:{xs:4,md:10}, width:{lg:'50%', md:'75%',xs:'100%'}}}>
            <SummaryTitleTag title={'artikel & tips'}/>
            <ContentTitle text={'wawasan untuk pemancing'}/>
            <ContentSummary summary={'Dari rahasia racikan umpan hingga teknik fight melawan ikan babon, pelajari semua yang kamu butuhkan untuk pulang membawa hasil.'}/>
        </Box>
    )
}

export default ArticlesBrief;