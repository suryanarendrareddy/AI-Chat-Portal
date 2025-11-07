import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import HomePage from './pages/HomePage'
import Login from './components/Login'
import Register from './components/Register'
import PasswordReset from './components/PasswordReset'

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('access')
  return token ? children : <Navigate to="/login" replace />
}

const App = () => {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <MainLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="chats/:chat_uid" element={<HomePage />} />
          <Route path="chats/new" element={<HomePage />} />
        </Route>
      </Routes>cc
  )
}

export default App
