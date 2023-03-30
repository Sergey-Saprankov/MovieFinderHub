import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { store } from './store'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/books/v1/volumes/' }),
  endpoints: builder => ({
    getPokemonByName: builder.query({
      query: name => `7zZQEAAAQBAJ?key=AIzaSyAd0gSPQumRnk_RECGKGr9AdAfo_JrNOPk`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi
