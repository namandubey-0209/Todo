import { createContext, useState } from 'react';
import { login as apiLogin, register as apiRegister } from '../api/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  const login = async (email, password) => {
    const { token, user } = await apiLogin({ email, password });
    localStorage.setItem('token', token);
    setToken(token);
    setUser(user);
  };

  const register = async (username, email, password) => {
    const { token, user } = await apiRegister({ username, email, password });
    localStorage.setItem('token', token);
    setToken(token);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};