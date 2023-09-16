import { PRODUCT_URL } from "../constants";
import { apiSlice } from "./apiSlices";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCT_URL,
      }),
      keepUnusedDataFor: 5
    }),
    getProductDetails: builder.query({
      query: (productID) => ({
        url: `${PRODUCT_URL}/${productID}`,
      }),
      keepUnusedDataFor: 5
    })
  })
})

export const {useGetProductsQuery, useGetProductDetailsQuery} = productsApiSlice;