import { Toolbar } from "@mui/material";
import ProductHeader from "./components/ProductsHeader";
import ProductList from "./components/ProductList";
import TestimonialSummary from "../Home/components/TestimonialSummary";
import TestimonialData from "../../data/testimonial.data";
import Footer from "../Home/components/Footer";


const Products = () => {
    return (
        <>
            <Toolbar/>
            <ProductHeader/>
            <ProductList/>
            <TestimonialSummary testimoniData={TestimonialData}/>
            <Footer/>
        </>
        
    )
}

export default Products;