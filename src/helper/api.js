import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const get = async (url, params) => {
  try {
    const response = await api.get(url, { params })
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred')
  }
}
