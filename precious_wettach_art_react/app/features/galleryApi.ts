import {createApi} from "@reduxjs/toolkit/query/react"
import type {Product} from '../../Types/product'
import {baseQueryWithErrorHandling} from "../api/baseApi"
import type { ProductParams } from "Types/productParams";
import {filterEmptyValues} from '../../lib/util'


export const galleryApi = createApi({
    reducerPath: 'galleryApi',
    baseQuery: baseQueryWithErrorHandling,
    endpoints: (builder) => ({
        fetchProducts: builder.query<Product[], ProductParams>({
            query: (productParams) => {
                return {
                    url: 'products',
                    params: filterEmptyValues(productParams)
                }
                
            }
        }),
        fetchProductDetials: builder.query<Product, number>({
            query: (productId) => `products/${productId}`
        }),
        fetchFilters: builder.query<{brands: string[], types: string[]}, void>({
            query: () => 'products/filters'
        })
    })
})


export const {useFetchProductDetialsQuery, useFetchProductsQuery, useFetchFiltersQuery} = galleryApi;