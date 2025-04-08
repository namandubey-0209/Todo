import { createContext, useState, useEffect } from 'react';
import { login as apiLogin, register as apiRegister, logout as apiLogout } from '../api/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

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