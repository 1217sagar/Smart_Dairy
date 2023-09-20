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
  })
})

export const {useLoginMutation} = usersApiSlice;