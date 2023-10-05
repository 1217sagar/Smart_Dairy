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
      }),
    }),
    profile: builder.mutation({
      query: (data) => ({
        url: `${USERs_URL}/profile`,
        method: 'PUT',
        body: data,
      })
    }),
    getUsers: builder.query({
      query: () => ({
        url: USERs_URL
      }),
      providesTags: ['Tags'],
      keepUnusedDataFor: 5
    }),
    deleteUser: builder.mutation({
      query: (userID) => ({
        url: `${USERs_URL}/${userID}`,
        method: 'DELETE'
      }),
    })
  })
})

export const {
  useLoginMutation, 
  useLogoutMutation,
  useRegisterMutation,
  useProfileMutation,
  useGetUsersQuery,
  useDeleteUserMutation
} = usersApiSlice;