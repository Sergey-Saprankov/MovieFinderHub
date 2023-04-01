import { createApi } from '@reduxjs/toolkit/query/react'

import { UserRequestParam, UserSchema } from '../types/UserSchema'

import { customBaseQuery } from 'shared/api/baseUrl'

export const UserApi = createApi({
  reducerPath: 'user',
  baseQuery: customBaseQuery,
  endpoints: builder => ({
    getUserData: builder.query<UserSchema, UserRequestParam>({
      query: ({ session_id, api_key }: UserRequestParam) =>
        `account/?${session_id}&api_key=${api_key}`,
    }),
  }),
})

export const { useGetUserDataQuery, reducer: userReducer } = UserApi
