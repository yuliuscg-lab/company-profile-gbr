import { Typography } from "@mui/material";

type Props = {
    text:string
}

const ContentTitle = ({text}:Props) => {
    return (
        <Typography variant='h3' sx={{fontWeight:'bold', textTransform:'uppercase', mb:1, fontSize:46}}>
            {text}
        </Typography>
    )
}

export default ContentTitle;