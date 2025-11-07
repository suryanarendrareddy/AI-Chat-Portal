import React, { useState } from 'react'
import API from '@/api'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'

const Login: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await API.post('/auth/login/', { username, password })
      login(response.data.access, response.data.refresh) 
      navigate('/')
    } catch (error: any) {
      alert(error.response?.data?.detail || 'Login failed')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white">
      <div className="w-full max-w-md bg-gray-900/80 border border-gray-800 rounded-2xl shadow-2xl backdrop-blur-md p-8">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 py-2.5 rounded-lg text-white font-semibold tracking-wide shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-gray-400 text-sm">
          Don't have an account?{' '}
          <span
            className="text-blue-400 hover:text-blue-500 font-medium cursor-pointer transition-all"
            onClick={() => navigate('/register')}
          >
            Register here
          </span>
        </div>

        <div className="mt-8 text-center text-xs text-gray-600">
          Forgot your password?{' '}
          <Link
            to="/password-reset"
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Reset
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
