import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedRoute from './pages/ProtectedRoute'

export default function App() {
  return ( 
  <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <h1 className="text-4xl font-bold">Hello Tailwind 🎉</h1>
  </div>
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