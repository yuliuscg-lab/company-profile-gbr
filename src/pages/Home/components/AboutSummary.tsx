import { Box, Grid } from "@mui/material";
import SummaryTitleTag from "../../../components/common/SummaryTitleTag";
import OverviewImg from "../../../assets/overview-catch.png";
import ContentTitle from "../../../components/common/ContentTitle";
import ContentSummary from "../../../components/common/ContentSummary";
import HomeContentData from "../../../data/home-content.data";
import { Science, Phishing, EmojiEvents, GppGood } from "@mui/icons-material";
import StrengthCard from "../../../components/common/StrengthCard";

const StrengthData = [
    {icon:Science, strength:'formula teruji lab', desc:'Setiap racikan dikembangkan ahli nutrisi pangan dengan profil aroma yang konsisten.'},
    {icon:Phishing, strength:'diuji di lapangan', desc:'Atlet mancing kami menguji langsung di kolam dan laut sebelum dirilis.'},
    {icon:EmojiEvents, strength:'andalan para juara', desc:'Ratusan kemenangan lomba galatama dibukukan dengan umpan GBR.'},
    {icon:GppGood, strength:'bahan food grade', desc:'diproduksi higienis tanpa bahan berbahaya, aman untuk ekosistem perairan.'}
]

const AboutSummary=()=> {

    const aboutData = HomeContentData[0];

    return (
        <Box component='section' sx={{height:'100vh', display:'flex', maxWidth:'100vw'}}>
            <Box sx={{width:'50%', display:'flex', justifyContent:'center', alignItems:'center', pt:2}}>
                <Box component='img' src={OverviewImg} aria-label='overview image' sx={{width:'80%', borderRadius:'16px'}}/>
            </Box>
            <Box sx={{pt:8,width:'50%', pr:10}}>
                <SummaryTitleTag title={aboutData.title}></SummaryTitleTag>
                <ContentTitle text={aboutData.text}/>
                <ContentSummary summary={aboutData.summary}/>
                <Grid container spacing={2}>
                {
                    StrengthData.map((data)=>(
                        <Grid size={6} key={data.strength}>
                            <StrengthCard icon={data.icon} strength={data.strength} desc={data.desc}>
                            </StrengthCard>                        
                        </Grid>
                    ))
                }

            </Grid>
            </Box>
        </Box>
    )
}
export default AboutSummary;