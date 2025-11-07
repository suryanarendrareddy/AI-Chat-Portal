import axios from 'axios'

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', 
})

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken') 
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// === Chat Functions ===
export const promptGPT = async ({
  message,
}: {
  message: string
}): Promise<{ reply: string }> => {
  const response = await API.post('/chat/', { message })
  return response.data
}

export const getChatMessages = async (
  chatId: string
): Promise<{ role: string; content: string }[]> => {
  const response = await API.get(`/chat/${chatId}/`)
  return response.data.messages
}

export const getAllChats = async () => {
  const response = await API.get('/conversations/')
  return response.data
}

export default API
