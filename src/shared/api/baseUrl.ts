import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const BASE_URL = `https://api.themoviedb.org/3/`

export const customBaseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
})
