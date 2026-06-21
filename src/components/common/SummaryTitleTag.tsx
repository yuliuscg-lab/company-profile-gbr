
import { Square } from "@mui/icons-material";
import { Box } from "@mui/material";

type Props = {
    title:string
}

const SummaryTitleTag = ({title}:Props) => {

    return (
        <Box 
        sx={{borderRadius:'16px',
            bgcolor:'#b0d3f7',
            color: '#0d47a1',     
            px: 2,               
            py: 0.5,            
            display: 'inline-flex',
            fontSize: '0.85rem',
            alignItems: 'center',
            justifyContent:'center',
            gap:'4px',
            borderColor:'#0d47a1',
            border:1,
            mb:2,
            textTransform:'uppercase'
            }}>
            <Square sx={{fontSize:'small'}}/>
            {title}
        </Box>
    )
}
export default SummaryTitleTag;