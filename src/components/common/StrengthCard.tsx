import { Box, Card, CardContent, Typography, type SvgIconProps } from "@mui/material";


type Props = {
    icon:React.ElementType<SvgIconProps>,
    strength:string,
    desc:string
}

const StrengthCard = ({icon:Icon, strength, desc}:Props) => {
    return(
        <Box>
            <Card variant='outlined'sx={{border:2, borderColor:'#1976D2', borderRadius:'16px'}}>
                <CardContent>
                    <Icon color='secondary'/>
                    <Typography color='secondary' sx={{textTransform:'uppercase', fontWeight:'bold'}}>{strength}</Typography>
                    <Typography sx={{opacity:0.6, fontSize:'14px'}}>{desc}</Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default StrengthCard;