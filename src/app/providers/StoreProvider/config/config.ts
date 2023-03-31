import { configureStore } from '@reduxjs/toolkit'

import { StateSchema } from './StateSchema'

import { userReducer } from 'entities/User'

export const createStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    reducer: {
      user: userReducer,
    },
    devTools: true,
    preloadedState: initialState,
  })
}

export type AppDispatch = ReturnType<typeof createStore>['dispatch']
