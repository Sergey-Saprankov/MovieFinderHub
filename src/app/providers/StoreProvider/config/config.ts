import { configureStore } from '@reduxjs/toolkit'

import { StateSchema } from './StateSchema'

import { loginApi, loginMiddleware, loginReducer } from 'features/Auth/AuthWithUserName'

export const createStore = (initialState?: StateSchema) => {
  return configureStore({
    reducer: {
      [loginApi.reducerPath]: loginApi.reducer,
      login: loginReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(loginMiddleware),
    devTools: true,
    preloadedState: initialState,
  })
}

export type AppDispatch = ReturnType<typeof createStore>['dispatch']
