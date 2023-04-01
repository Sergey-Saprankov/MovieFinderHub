import { createApi } from '@reduxjs/toolkit/query/react'

import {
  CreateSessionIdRequest,
  CreateSessionIdResponse,
  CreateSessionWithLoginRequest,
  CreateSessionWithLoginResponse,
} from 'features/Auth/AuthWithUserName/model/types/LoginApiSchema'
import { API_KEY } from 'shared/api/apiKey'
import { customBaseQuery } from 'shared/api/baseUrl'

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: customBaseQuery,
  endpoints: builder => ({
    createRequestToken: builder.query({
      query: () => ({
        url: `authentication/token/new?api_key=${API_KEY}`,
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
      query: ({ username, password, request_token }: CreateSessionWithLoginRequest) => ({
        url: `authentication/token/validate_with_login?username=${username}&password=${password}&request_token=${request_token}&api_key=${API_KEY}`,
        method: 'POST',
      }),
    }),
    createSessionId: builder.mutation<CreateSessionIdResponse, CreateSessionIdRequest>({
      query: ({ request_token }: CreateSessionIdRequest) => ({
        url: `authentication/session/new?request_token=${request_token}&api_key=${API_KEY}`,
        method: 'POST',
      }),
    }),
  }),
})

export const {
  useAuthenticateWithLoginMutation,
  useCreateSessionIdMutation,
  useCreateRequestTokenQuery,
  middleware: loginMiddleware,
} = loginApi
