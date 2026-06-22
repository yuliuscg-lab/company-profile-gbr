import AboutSummary from "./components/AboutSummary";
import Hero from "./components/Hero";
import ProductSummary from "./components/ProductSummary";
import ProductData from "../../data/product.data";
import TestimonialSummary from "./components/TestimonialSummary";
import TestimonialData from "../../data/testimonial.data";

const Home = () =>{
    return(
        <>
            <Hero/>
            <AboutSummary/>
            <ProductSummary ProductDatas={ProductData}/>
            <TestimonialSummary testimoniData={TestimonialData}/>
        </>
    )
};

export default Home;