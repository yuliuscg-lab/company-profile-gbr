import { Box, type SvgIconProps} from "@mui/material";
import SummaryTitleTag from "../../../components/common/SummaryTitleTag";
import ContentTitle from "../../../components/common/ContentTitle";
import ContentSummary from "../../../components/common/ContentSummary";
import CultureCard from "./CultureCard";
import { FavoriteBorderOutlined, AutoAwesomeOutlined, PeopleAltOutlined, EnergySavingsLeafOutlined } from "@mui/icons-material";

export interface IValueCard {
    icon: React.ElementType<SvgIconProps>,
    title: string
    description: string
}

const valueCards: IValueCard[] = [
    {
        icon: FavoriteBorderOutlined,
        title: 'PASSION MEMANCING',
        description:
            'Kami pemancing sebelum jadi produsen. Setiap keputusan lahir dari kecintaan pada hobi ini.',
    },
    {
        icon: AutoAwesomeOutlined,
        title: 'OBSESI MUTU',
        description:
            'Tidak ada batch yang lolos tanpa lulus uji aroma, tekstur, dan performa lapangan.',
    },
    {
        icon: PeopleAltOutlined,
        title: 'DEKAT DENGAN KOMUNITAS',
        description:
            'Kami mendengar masukan pemancing dan terus menyempurnakan racikan bersama mereka.',
    },
    {
        icon: EnergySavingsLeafOutlined,
        title: 'RAMAH LINGKUNGAN',
        description:
            'Bahan alami food-grade yang aman bagi ikan dan ekosistem perairan.',
    },
]

const Culture = () => {
    return (
        <Box component="section" sx={{height:'auto', p:{xs:4,md:10}}}>
            <SummaryTitleTag title={'Budaya kami'}/>
            <ContentTitle text={'nilai yang kami pegang erat'}/>
            <ContentSummary summary={'Empat prinsip ini menjadi kompas setiap orang di Tarikan, dari meja riset hingga lini produksi.'}/>
            <Box sx={{display:'flex', gap:4, my:5}}>
                {
                valueCards.map((data)=>(
                    <CultureCard data={data} />
                ))
            }
            </Box>
        </Box>
        
    )
}

export default Culture;