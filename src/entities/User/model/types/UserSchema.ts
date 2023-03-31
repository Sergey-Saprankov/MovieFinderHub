import { userReducer } from '../services/fetchUser'

export interface UserSchema {
  avatar?: {
    gravatar: {
      hash: string
    }
  }
  id?: number
  iso_639_1?: string
  iso_3166_1?: string
  name: string
  include_adult?: boolean
  username: string
}

export interface UserRequestParam {
  session_id: string
  api_key: string
}

export type UserSchemaByState = ReturnType<typeof userReducer>
