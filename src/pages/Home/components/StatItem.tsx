import { Box, Typography } from "@mui/material";

interface StatItemProps {
    value:number,
    label:string,
    desc:string
}

const StatItem=({value, label, desc}:StatItemProps)=> {
    return (
        
        <Box sx={{display:'flex', flexDirection:'column'}}>
            <Box sx={{display:'flex'}}>
                <Typography component='h3' color='secondary' sx={{fontWeight:'bold', fontSize:{xs:24,md:36}}}>{value}</Typography>
                <Typography component='h3' color='secondary' sx={{fontWeight:'bold', fontSize:{xs:24,md:36}}}>{label}</Typography>
            </Box>
            <Typography component='h6' color='primary' sx={{fontSize:{xs:16,md:14}, opacity:0.6}}>{desc}</Typography>
        </Box>
        
    )
}

export default StatItem;