export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  const login = async (email, password) => {
    try {
      const { data } = await apiLogin({ email, password }); // Make sure this matches your API response
      localStorage.setItem('token', data.token);
      setToken(data.token);
      setUser(data.user);
      return data; // Return the data for handling in the component
    } catch (error) {
      console.error('Login failed:', error);
      throw error; // Re-throw to handle in the component
    }
  };

  // ... rest of the context
};