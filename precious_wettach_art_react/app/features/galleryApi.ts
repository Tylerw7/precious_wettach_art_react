import {createApi} from "@reduxjs/toolkit/query/react"
import type {Product} from '../../Types/product'
import {baseQueryWithErrorHandling} from "../api/baseApi"


export const galleryApi = createApi({
    reducerPath: 'galleryApi',
    baseQuery: baseQueryWithErrorHandling,
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