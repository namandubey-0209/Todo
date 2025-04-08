import { Link } from 'react-router-dom'

export default function AuthToggle({ isLogin }) {
  return (
    <p className="mt-4 text-center text-sm text-gray-600">
      {isLogin ? (
        <>Don't have an account? <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">Register</Link></>
      ) : (
        <>Already have an account? <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">Login</Link></>
      )}
    </p>
  )
}