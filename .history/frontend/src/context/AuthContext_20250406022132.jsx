import { createContext, useContext, useState, useEffect } from 'react';
import { login as apiLogin, register as apiRegister, logout as apiLogout } from '../api/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  // Optional: Fetch user data when token changes
  useEffect(() => {
    if (token) {
      // Add your user data fetching logic here if needed
    }
  }, [token]);

  const login = async (email, password) => {
    const { token } = await apiLogin({ email, password });
    localStorage.setItem('token', token);
    setToken(token);
  };

  const register = async (username, email, password) => {
    const { token } = await apiRegister({ username, email, password });
    localStorage.setItem('token', token);
    setToken(token);
  };

  const logout = () => {
    apiLogout();
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};