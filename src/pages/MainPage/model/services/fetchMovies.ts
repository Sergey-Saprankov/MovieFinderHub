import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const MoviesApi = createApi({
  reducerPath: 'MoviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: builder => ({
    getMovies: builder.query({
      query: name => `account?api_key=${name}&session_id=ce202f7fa460b3c4f8cd859bdc69d3ddfd246295`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMoviesQuery } = MoviesApi

// ce202f7fa460b3c4f8cd859bdc69d3ddfd246295
