import { Box } from "@mui/material";
import HistoryImg from "../../../assets/about-image/history-lab.png"
import SummaryTitleTag from "../../../components/common/SummaryTitleTag";
import ContentTitle from "../../../components/common/ContentTitle";
import ContentSummary from "../../../components/common/ContentSummary";
import TimeLine from "./TimeLine";

const History = () => {
    return (
        <Box component='section' sx={{height:'auto', p:{xs:4,md:10}, bgcolor:'#ebf3ff'}}>
            <Box sx={{display:'flex', gap: 4, alignItems:'center'}}>
                <Box sx={{width:{md:'45%'}}}>
                    <Box component='img' src={HistoryImg} sx={{width:'100%', height:'auto', borderRadius:'16px'}}/>
                </Box>
                <Box sx={{width:{md:'55%'}}}>
                    <SummaryTitleTag title={"perjalanan kami"}/>
                    <ContentTitle text={'dari teras rumah ke seluruh nusantara'}/>
                    <ContentSummary summary={"Perjalanan kami dimulai dari rasa penasaran sederhana: racikan seperti apa yang membuat ikan tak bisa menolak? Lebih dari satu dekade kemudian, pertanyaan itu telah berkembang menjadi ratusan eksperimen, ribuan jam memancing, dan formula yang teruji."}/>
                    <TimeLine/>
                </Box>
            </Box>
        </Box>
    )
}

export default History;