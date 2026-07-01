import { Toolbar } from "@mui/material";
import ArticlesBrief from "./components/ArticlesBrief";
import ArticleList from "./components/ArticleList";
import Footer from "../Home/components/Footer";

const ArticlesMain = () => {
    
    return (
        <>
            <Toolbar/>
            <ArticlesBrief/>
            <ArticleList/>
            <Footer/>
        </>
    ) 
}

export default ArticlesMain;