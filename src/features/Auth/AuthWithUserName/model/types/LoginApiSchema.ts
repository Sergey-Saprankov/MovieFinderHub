import { loginApi } from '../services/login'

export interface CreateSessionWithLoginRequest {
  username: string
  password: string
  request_token: string
}

export interface CreateSessionWithLoginResponse {
  success: boolean
  expires_at: string
  request_token: string
}

export interface CreateSessionIdRequest {
  request_token: string
}

export interface CreateSessionIdResponse {
  success: boolean
  session_id: string
}

export type LoginApiSchema = ReturnType<typeof loginApi.reducer>

export interface LoginSchema {
  userName: string
  password: string
  errorUserName: string | null
  errorPassword: string | null
}
