import AboutSummary from "./components/AboutSummary";
import Hero from "./components/Hero";
import ProductSummary from "./components/ProductSummary";
import ProductData from "../../data/product.data";
import TestimonialSummary from "./components/TestimonialSummary";
import TestimonialData from "../../data/testimonial.data";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import { Toolbar } from "@mui/material";

const Home = () =>{
    return(
        <>
            <Toolbar/>
            <Hero/>
            <AboutSummary/>
            <ProductSummary ProductDatas={ProductData}/>
            <TestimonialSummary testimoniData={TestimonialData}/>
            <CallToAction/>
            <Footer/>
        </>
    )
};

export default Home;