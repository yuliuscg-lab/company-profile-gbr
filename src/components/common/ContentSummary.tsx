import { Typography } from "@mui/material"

type Props = {
    summary:string
}

const ContentSummary = ({summary}:Props) => {
    return (
    <Typography variant='h6' sx={{fontSize:18, opacity:'0.6', fontWeight:400, mb:1}}>
        {summary}
    </Typography>
    )
}

export default ContentSummary