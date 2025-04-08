import { useState } from 'react'

export default function AuthForm({ isLogin, onSubmit, error }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isLogin) {
      onSubmit(formData.email, formData.password)
    } else {
      onSubmit(formData.username, formData.email, formData.password)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {!isLogin && (
        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={formData.username}
            onChange={(e) => setFormData({...formData, username: e.target.value})}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {isLogin ? 'Sign in' : 'Register'}
      </button>
    </form>
  )
}