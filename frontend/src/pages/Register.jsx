import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import AuthForm from '../components/auth/AuthForm'
import AuthToggle from '../components/auth/AuthToggle'

export default function Register() {
  const { register } = useAuth()
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleRegister = async (username, email, password) => {
    try {
      await register(username, email, password)
      navigate('/dashboard') // Add this line
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed - user may already exist')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <AuthForm isLogin={false} onSubmit={handleRegister} error={error} />
        <AuthToggle isLogin={false} />
      </div>
    </div>
  )
}