import { configureStore } from '@reduxjs/toolkit'

import { StateSchema } from './StateSchema'

import { userReducer } from 'entities/User'
import { loginReducer } from 'features/Auth/AuthWithUserName'

export const createStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    reducer: {
      user: userReducer,
      login: loginReducer,
    },
    devTools: true,
    preloadedState: initialState,
  })
}

export type AppDispatch = ReturnType<typeof createStore>['dispatch']
