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
    <Routes>
    <Route element={<PublicLayout />}>
        <Route path={ROUTES.HOME} element={<Home/>} />
        <Route path={ROUTES.ABOUT} element={<About/>}/>
    </Route>

    <Route path={ROUTES.CMS} element={<CmsEntry />}>
        <Route element={<DashboardLayout />}>
            <Route index element={<Navigate to={ROUTES.CMSARTICLES} replace />} />
            <Route path="articles" element={<ArticlesPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="analytics" element={<AnalyticsPage />} />
        </Route>
    </Route>
</Routes>
    )
}

export default AppRoutes