import { PRODUCT_URL } from "../constants";
import { apiSlice } from "./apiSlices";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCT_URL,
      }),
      providesTags: ['Products'],
      keepUnusedDataFor: 5,
    }),
    getProductDetails: builder.query({
      query: (productID) => ({
        url: `${PRODUCT_URL}/${productID}`,
      }),
      keepUnusedDataFor: 5
    }), 
    createProduct: builder.mutation({
      query: () => ({
        url: PRODUCT_URL,
        method: 'POST'
      }),
      invalidatesTags: ['Products']
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCT_URL}/${data.productId}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['Products']
    })
  })
})

export const {
  useGetProductsQuery, 
  useGetProductDetailsQuery, 
  useCreateProductMutation,
  useUpdateProductMutation
} = productsApiSlice;