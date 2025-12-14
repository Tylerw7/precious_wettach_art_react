import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import type {Product} from '../../Types/product'



export const galleryApi = createApi({
    reducerPath: 'galleryApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5001/api'}),
    endpoints: (builder) => ({
        fetchProducts: builder.query<Product[], void>({
            query: () => ({url: 'products'})
        }),
        fetchProductDetials: builder.query<Product, number>({
            query: (productId) => `products/${productId}`
        })
    })
})


export const {useFetchProductDetialsQuery, useFetchProductsQuery} = galleryApi;