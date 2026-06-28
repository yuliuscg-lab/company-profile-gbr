import { Toolbar } from "@mui/material"
import AboutBrief from "./components/AboutBrief"
import History from "./components/History"
import Culture from "./components/Culture"
import Teams from "./components/Teams"
import Footer from "../Home/components/Footer"


const About = () => {
    return (
        <>
            <Toolbar/>
            <AboutBrief/>
            <History/>
            <Culture/>
            <Teams/>
            <Footer/>
        </>
    )
}

export default About