import { configureStore } from '@reduxjs/toolkit'

import { StateSchema } from './StateSchema'

import { userMiddleware, userReducer } from 'entities/User'
import { loginMiddleware, loginReducer } from 'features/Auth/AuthWithUserName'

export const createStore = (initialState?: StateSchema) => {
  return configureStore({
    reducer: {
      user: userReducer,
      login: loginReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(loginMiddleware, userMiddleware),
    devTools: true,
    preloadedState: initialState,
  })
}

export type AppDispatch = ReturnType<typeof createStore>['dispatch']
