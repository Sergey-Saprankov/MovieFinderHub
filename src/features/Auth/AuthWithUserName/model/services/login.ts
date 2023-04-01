import { createApi } from '@reduxjs/toolkit/query/react'

import {
  CreateSessionIdRequest,
  CreateSessionIdResponse,
  CreateSessionWithLoginRequest,
  CreateSessionWithLoginResponse,
} from '../types/LoginSchema'

import { API_KEY } from 'shared/api/apiKey'
import { customBaseQuery } from 'shared/api/baseUrl'

const loginApi = createApi({
  reducerPath: 'login',
  baseQuery: customBaseQuery,
  endpoints: builder => ({
    createRequestToken: builder.query({
      query: () => ({
        url: `authentication/token/new`,
        method: 'GET',
        param: {
          api_key: API_KEY,
        },
      }),
    }),
    authenticateWithLogin: builder.mutation<
      CreateSessionWithLoginResponse,
      CreateSessionWithLoginRequest
    >({
      query: (arg: CreateSessionWithLoginRequest) => ({
        url: `authentication/token/validate_with_login`,
        method: 'POST',
        param: {
          api_key: API_KEY,
        },
        body: {
          arg,
        },
      }),
    }),
    createSessionId: builder.mutation<CreateSessionIdResponse, CreateSessionIdRequest>({
      query: (arg: CreateSessionIdRequest) => ({
        url: `authentication/token/validate_with_login`,
        method: 'POST',
        param: {
          api_key: API_KEY,
        },
        body: {
          ...arg,
        },
      }),
    }),
  }),
})

export const {
  useAuthenticateWithLoginMutation,
  useCreateSessionIdMutation,
  useCreateRequestTokenQuery,
  reducer: loginReducer,
  middleware: loginMiddleware,
  endpoints,
} = loginApi
