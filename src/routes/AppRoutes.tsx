import { Routes, Route, Navigate, Outlet } from "react-router-dom"
import NavBar from "../components/layout/NavBar/NavBar"
import Home from "../pages/Home/Home"
import { ROUTES } from "./routePaths"
import ArticlesPage from "../pages/Articles/ArticlesPage"
import UsersPage from "../pages/Users/UsersPage"
import AnalyticsPage from "../pages/Analytics/AnalyticsPage"
import DashboardLayout from '../components/layout/Dashboard/DashboardLayout'
import About from "../pages/About/About"
import CmsEntry from "./CMSEntry"
import ScrollToTop from "./ScrollToTop"
import Products from "../pages/Products/Products"
import ArticlesMain from '../pages/ArticlesMain/ArticlesMain'
import ArticleDetails from "../pages/ArticleDetails/ArticleDetails"


const PublicLayout = () => (
    <>
        <NavBar />
        <main>
            <Outlet />
        </main>
    </>
)

const AppRoutes = () => {
    return (
        <>
        <ScrollToTop/>
        <Routes>
            <Route element={<PublicLayout />}>
                <Route path={ROUTES.HOME} element={<Home/>} />
                <Route path={ROUTES.ABOUT} element={<About/>}/>
                <Route path={ROUTES.PRODUCTS} element={<Products/>}/>
                <Route path={ROUTES.ARTICLES} element={<ArticlesMain/>}/>
                <Route path={ROUTES.ARTICLE_READ} element={<ArticleDetails/>}/>
            </Route>

            <Route path={ROUTES.CMS} element={<CmsEntry />}>
                <Route element={<DashboardLayout />}>
                    <Route index element={<Navigate to={ROUTES.CMSARTICLES} replace />} />
                    <Route path={ROUTES.CMSARTICLES} element={<ArticlesPage />} />
                    <Route path={ROUTES.CMSUSERS} element={<UsersPage />} />
                    <Route path={ROUTES.CMSANALYTICS} element={<AnalyticsPage />} />
                </Route>
            </Route>
        </Routes>
    </>
    )   
}

export default AppRoutes;