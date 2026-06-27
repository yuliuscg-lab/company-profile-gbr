import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute() {
    const { user, isAuthenticating } = useAuth();

    if (isAuthenticating) return null; // atau loading spinner

    if (!user) return <Navigate to="/cms" replace />;

    return <Outlet />
}
