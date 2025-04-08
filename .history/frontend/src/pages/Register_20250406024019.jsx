import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/auth/RegisterForm';

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleRegister = async (username, email, password) => {
    try {
      await register(username, email, password);
      navigate('/');
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <RegisterForm onSubmit={handleRegister} error={error} />
    </div>
  );
}