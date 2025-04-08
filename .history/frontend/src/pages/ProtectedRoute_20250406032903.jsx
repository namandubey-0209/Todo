import { useAuth } from '../hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const { token } = useAuth();
  return token ? <Outlet /> : <Navigate to="/login" replace />;
}