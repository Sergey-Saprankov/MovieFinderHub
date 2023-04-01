import { LoginApiSchema } from 'features/Auth/AuthWithUserName'
import { LoginSchema } from 'features/Auth/AuthWithUserName/model/types/LoginApiSchema'

export interface StateSchema {
  loginApi: LoginApiSchema
  login: LoginSchema
}
