import React, { useState } from 'react'
import api from '../api'
import { useNavigate } from 'react-router-dom'

const PasswordReset: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    try {
      // Placeholder for backend API
      await api.post('/auth/password-reset/', { email })
      setMessage('✅ Password reset link has been sent to your email.')
    } catch (error: any) {
      setMessage(
        error.response?.data?.error ||
          '❌ Unable to send reset link. Please try again.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white">
      <div className="w-full max-w-md bg-gray-900/80 border border-gray-800 rounded-2xl shadow-2xl backdrop-blur-md p-8">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-6">
          Reset Your Password
        </h2>

        <form onSubmit={handleReset} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your registered email"
              className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-gradient-to-r from-blue-500 to-indigo-600 py-2.5 rounded-lg text-white font-semibold tracking-wide shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform ${
              isLoading
                ? 'opacity-70 cursor-not-allowed'
                : 'hover:-translate-y-0.5'
            }`}
          >
            {isLoading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm text-gray-300">{message}</p>
        )}

        <div className="mt-8 text-center text-gray-400 text-sm">
          Remembered your password?{' '}
          <span
            className="text-blue-400 hover:text-blue-500 font-medium cursor-pointer transition-all"
            onClick={() => navigate('/login')}
          >
            Back to Login
          </span>
        </div>
      </div>
    </div>
  )
}

export default PasswordReset
