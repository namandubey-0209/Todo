import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  // Enhanced logout with redirect
  const logout = () => {
    context.logout();
    navigate('/login');
  };

  return {
    ...context,
    logout // Override with enhanced logout
  };
};