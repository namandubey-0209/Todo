import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedRoute from './pages/ProtectedRoute'

export default function App() {
  return (
    
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