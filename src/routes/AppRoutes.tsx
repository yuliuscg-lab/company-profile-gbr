
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home";
import { ROUTES } from "./routePaths";


const AppRoutes=()=> {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home/>}/>
        </Routes>
    )
        
    
}

export default AppRoutes;