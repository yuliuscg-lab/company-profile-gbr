import { Box } from "@mui/material";
import SummaryTitleTag from "../../../components/common/SummaryTitleTag";
import ContentTitle from "../../../components/common/ContentTitle";
import ContentSummary from "../../../components/common/ContentSummary";

const Culture = () => {
    return (
        <Box component="section" sx={{height:'auto', p:{xs:4,md:10}}}>
            <SummaryTitleTag title={'Budaya kami'}/>
            <ContentTitle text={'nilai yang kami pegang erat'}/>
            <ContentSummary summary={'Empat prinsip ini menjadi kompas setiap orang di Tarikan, dari meja riset hingga lini produksi.'}/>
            </Box>

    )
}

export default Culture;