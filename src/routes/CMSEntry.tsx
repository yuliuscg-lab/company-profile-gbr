// CmsEntry.tsx
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoginPage from "../pages/LogInAdmin/LogInAdmin";
import LoadingPage from "../components/common/LoadingPage";

export default function CmsEntry() {
    const { user, isAuthenticating } = useAuth();
    if (isAuthenticating) return <LoadingPage/>;
    return user ? <Outlet /> : <LoginPage />;
}