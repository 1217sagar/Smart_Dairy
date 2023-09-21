import { USERs_URL } from "../constants";
import { apiSlice } from "./apiSlices";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERs_URL}/auth`,
        method: 'POST',
        body: data
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERs_URL}`,
        method: 'POST',
        body: data
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERs_URL}/logout`,
        method: 'POST'
      })
    })
  })
})

export const {
  useLoginMutation, 
  useLogoutMutation,
  useRegisterMutation
} = usersApiSlice;