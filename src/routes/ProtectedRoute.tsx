import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { ROUTES } from './routePaths';
import LoadingPage from '../components/common/LoadingPage';
import LoginPage from '../pages/LogInAdmin/LogInAdmin';


export default function ProtectedRoute() {
    const { user, isAuthenticating } = useAuth();

    if (isAuthenticating) return <LoadingPage/>;

    if (!user) return <Navigate to={ROUTES.CMS} replace />;

    return user ? <Outlet /> : <LoginPage />;
}
