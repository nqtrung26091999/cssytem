import api from '@/lib/axios'
import type {
  LoginPayload,
  LoginResponse,
} from '../types/auth.type'

export const loginApi = async (
  payload: LoginPayload
): Promise<LoginResponse> => {
  const res = await api.post(
    '/login',
    payload
  )

  return res.data
}