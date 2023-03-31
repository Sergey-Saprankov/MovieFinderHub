import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { UserRequestParam, UserSchema } from '../types/UserSchema'

import { BASE_URL } from 'shared/api/baseUrl'

export const UserApi = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getUserData: builder.query<UserSchema, UserRequestParam>({
      query: ({ session_id, api_key }: UserRequestParam) =>
        `account/?${session_id}&api_key=${api_key}`,
    }),
  }),
})

export const { useGetUserDataQuery, reducer: userReducer } = UserApi
