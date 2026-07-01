import { Box } from "@mui/material";
import ContentSummary from "../../../components/common/ContentSummary";
import ContentTitle from "../../../components/common/ContentTitle";
import SummaryTitleTag from "../../../components/common/SummaryTitleTag";

const ProductHeader = () => {
    return (
        <Box component='section' sx={{height:'auto', p:{xs:4,md:10}, width:{xs:'100%',md:'50%'}}}>
            <SummaryTitleTag title='koleksi produk'/>
            <ContentTitle text='umpan untuk setiap medan'/>
            <ContentSummary summary='Empat formula andalan yang dikembangkan spesifik untuk jenis ikan dan kondisi memancing yang berbeda. Pilih yang sesuai target tangkapanmu.'/>
        </Box>
    )
}

export default ProductHeader;