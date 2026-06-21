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
                <Typography variant='h3' color='secondary' sx={{fontWeight:'bold', fontSize:36}}>{value}</Typography>
                <Typography variant='h3' color='secondary' sx={{fontWeight:'bold', fontSize:36}}>{label}</Typography>
            </Box>
            <Typography variant='h6' color='primary' sx={{fontSize:14, opacity:0.6}}>{desc}</Typography>
        </Box>
        
    )
}

export default StatItem;