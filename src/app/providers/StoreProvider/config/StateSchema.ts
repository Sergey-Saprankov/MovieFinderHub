import { UserSchemaByState } from 'entities/User'
import { LoginSchema } from 'features/Auth/AuthWithUserName'

export interface StateSchema {
  user: UserSchemaByState
  login: LoginSchema
}
