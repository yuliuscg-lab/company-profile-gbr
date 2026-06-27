import { Typography } from "@mui/material";

type Props = {
    text:string
}

const ContentTitle = ({text}:Props) => {
    return (
        <Typography variant='h3' sx={{fontWeight:'bold', textTransform:'uppercase', mb:1, fontSize:{xs:40,md:46}}}>
            {text}
        </Typography>
    )
}

export default ContentTitle;