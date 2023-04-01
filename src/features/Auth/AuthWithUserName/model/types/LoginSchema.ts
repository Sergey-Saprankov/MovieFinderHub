import { loginReducer } from '../services/login'

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

export type LoginSchema = ReturnType<typeof loginReducer>
