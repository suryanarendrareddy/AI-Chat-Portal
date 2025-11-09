import React, { useState } from 'react'
import API from '@/api'
import { useNavigate } from 'react-router-dom'

const Register: React.FC = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await API.post('/auth/register/', {
        username,
        email,
        password,
        password2: password,
      })
      alert('Registration successful! Please login.')
      navigate('/login')
    } catch (error: any) {
      console.error(error.response?.data)
      alert(error.response?.data?.error || 'Registration failed')
    }
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white">
      <div className="w-full max-w-md bg-gray-900/80 border border-gray-800 rounded-2xl shadow-2xl backdrop-blur-md p-8">
        <div className='flex flex-row justify-center gap-2 pb-5'>
          <img src="/favIcon.png" alt="Logo" className='w-10' />
          <p className="text-white text-3xl font-extrabold">ErgoSphere</p>
        </div>
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
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
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            Register
          </button>
        </form>

        <div className="mt-6 text-center text-gray-400 text-sm">
          Already have an account?{' '}
          <span
            className="text-blue-400 hover:text-blue-500 font-medium cursor-pointer transition-all"
            onClick={() => navigate('/login')}
          >
            Login here
          </span>
        </div>

        <div className="mt-8 text-center text-xs text-gray-600">
          By registering, you agree to our{' '}
          <span className="text-blue-500 hover:underline cursor-pointer">
            Terms & Conditions
          </span>
        </div>
      </div>
    </div>
  )
}

export default Register
