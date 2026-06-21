import AboutSummary from "./components/AboutSummary";
import Hero from "./components/Hero";
import ProductSummary from "./components/ProductSummary";
import ProductData from "../../data/product.data";
import TestimonialSummary from "./TestimonialSummary";

const Home = () =>{
    return(
        <>
            <Hero/>
            <AboutSummary/>
            <ProductSummary ProductDatas={ProductData}/>
            <TestimonialSummary/>
        </>
    )
};

export default Home;