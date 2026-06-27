import { Routes, Route, Outlet } from "react-router-dom"
import NavBar from "../components/layout/NavBar/NavBar"
import Home from "../pages/Home/Home"
import LoginPage from "../pages/LogInAdmin/LogInAdmin"
import { ROUTES } from "./routePaths"
import ProtectedRoute from "./ProtectedRoute"
import DashboardPage from "../pages/Dashboard/DashboardPage"
import ArticlesPage from "../pages/Articles/ArticlesPage"
import UsersPage from "../pages/Users/UsersPage"
import AnalyticsPage from "../pages/Analytics/AnalyticsPage"
import DashboardLayout from '../components/layout/Dashboard/DashboardLayout'

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
            <Route path={ROUTES.HOME} element={<Home />} />
        </Route>

        <Route path={ROUTES.CMS} element={<LoginPage />} />

        <Route element={<ProtectedRoute />}>
            <Route path={ROUTES.CMSDASHBOARD} element={<DashboardLayout />}>
                <Route index element={<DashboardPage />} />
                <Route path={ROUTES.CMSARTICLES} element={<ArticlesPage />} />
                <Route path={ROUTES.CMSUSERS} element={<UsersPage />} />
                <Route path={ROUTES.CMSANALYTICS} element={<AnalyticsPage />} />
            </Route>
        </Route>
    </Routes>
    )
}

export default AppRoutes