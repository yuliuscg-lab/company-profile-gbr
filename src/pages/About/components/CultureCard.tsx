import {  } from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";
import type { IValueCard } from "./Culture";

type Props = {
    data:IValueCard;
}

const CultureCard = ({data}:Props) => {
    const Icon = data.icon;
    return (
        <Box>
            <Card variant='outlined'sx={{border:2, borderColor:'#1976D2', borderRadius:'16px', height:{md:'170px', xs:'150px'}, bgcolor:'#ebf3ff'}}>
                <CardContent>
                    <Icon color='secondary'/>
                    <Typography color='secondary' sx={{textTransform:'uppercase', fontWeight:'bold'}}>{data.title}</Typography>
                    <Typography sx={{opacity:0.6, fontSize:'0.9rem'}}>{data.description}</Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default CultureCard;