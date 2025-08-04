// services/authApi.ts
import axios from 'axios';
import { API_BASE_URL } from '@/const/const';
export async function login(userId: string, password: string) {
  const res = await axios.post(`${API_BASE_URL}/login`, { userId, password });
  return res.data; // on suppose que res.data = { token }
}

export async function register(userId: string, password: string) {
  const res = await axios.post(`${API_BASE_URL}/register`, { userId, password });
  return res.data; // on suppose que res.data = { token }
}
