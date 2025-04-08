import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import AuthForm from '../components/auth/AuthForm'
import AuthToggle from '../components/auth/AuthToggle'

export default function Login() {
  const { login } = useAuth()
  const [error, setError] = useState('')

  const handleLogin = async (email, password) => {
    try {
      await login(email, password)
    } catch (err) {
      setError('Invalid email or password')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <AuthForm isLogin onSubmit={handleLogin} error={error} />
        <AuthToggle isLogin />
      </div>
    </div>
  )
}