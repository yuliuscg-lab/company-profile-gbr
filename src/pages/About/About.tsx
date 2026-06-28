import { Toolbar } from "@mui/material"
import AboutBrief from "./components/AboutBrief"
import History from "./components/History"
import Culture from "./components/Culture"


const About = () => {
    return (
        <>
            <Toolbar/>
            <AboutBrief/>
            <History/>
            <Culture/>
        </>
    )
}

export default About