import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { LoginSchema } from 'features/Auth/AuthWithUserName/model/types/LoginApiSchema'

const initialState: LoginSchema = {
  password: '12345678',
  userName: 'Test-Account',
  errorUserName: null,
  errorPassword: null,
}

const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
    setErrorUserName: (state, action: PayloadAction<string | null>) => {
      state.errorUserName = action.payload
    },
    setErrorPassword: (state, action: PayloadAction<string | null>) => {
      state.errorPassword = action.payload
    },
  },
  extraReducers: {},
})

export const { reducer: loginReducer } = loginSlice
export const { setUserName, setPassword, setErrorUserName, setErrorPassword } = loginSlice.actions
