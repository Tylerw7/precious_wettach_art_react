import {createApi} from "@reduxjs/toolkit/query/react"
import type {Product} from '../../Types/product'
import {baseQueryWithErrorHandling} from "../api/baseApi"
import type { ProductParams } from "Types/productParams";
import {filterEmptyValues} from '../../lib/util'
import type {Pagination} from '../../Types/pagination'


export const galleryApi = createApi({
    reducerPath: 'galleryApi',
    baseQuery: baseQueryWithErrorHandling,
    endpoints: (builder) => ({
        fetchProducts: builder.query<{items: Product[], pagination: Pagination}, ProductParams>({
            query: (productParams) => {
                return {
                    url: 'products',
                    params: filterEmptyValues(productParams)
                }  
            },
            transformResponse: (items: Product[], meta) => {
                const paginationHeader = meta?.response?.headers.get('Pagination');
                const pagination = paginationHeader ? JSON.parse(paginationHeader) : null;
                return {items, pagination};
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