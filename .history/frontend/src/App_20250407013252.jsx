import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedRoute from './pages/ProtectedRoute'

export default function App() {
  return (
    <h1 className="text-red-500 text-2xl font-bold">Hello Tailwind</h1>
    // <AuthProvider>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/register" element={<Register />} />
    //       <Route element={<ProtectedRoute />}>
    //         <Route path="/" element={<Dashboard />} />
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    // </AuthProvider>
  )
}