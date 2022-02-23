import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
	tagTypes: ['category', 'store', 'product'],
	endpoints: (builder) => ({
		getStore: builder.query({
			query: ({ page = null, limit = null, id = null }) => {
				let url;
				if (page && limit) {
					url = `/store?page=${page}&limit=${limit}`;
					return { url, method: 'GET' };
				} else {
					url = `/store?id=${id}`;
					return { url, method: 'GET' };
				}
			},
			providesTags: ['category'],
		}),
		addStore: builder.mutation({
			query: (initialStore) => ({
				url: '/store',
				method: 'POST',
				body: initialStore,
			}),
			invalidatesTags: ['category'],
		}),
		addCategory: builder.mutation({
			query: (initialCatgeory) => ({
				url: '/category',
				method: 'POST',
				body: initialCatgeory,
			}),
			invalidatesTags: ['category'],
		}),
		getCategory: builder.query({
			query: ({ storeID = null, id = null }) => {
				let url;
				if (storeID) {
					url = `/category?storeID=${storeID}`;
					return { url, method: 'GET' };
				} else {
					url = `/category?id=${id}`;
					return { url, method: 'GET' };
				}
			},
			providesTags: ['category'],
		}),
		addProduct: builder.mutation({
			query: (initialStore) => ({
				url: '/product',
				method: 'POST',
				body: initialStore,
			}),
			invalidatesTags: ['product'],
		}),
		getProduct: builder.query({
			query: ({ categoryID = null }) => {
				let url = `/product?categoryID=${categoryID}`;
				return { url, method: 'GET' };
			},
			providesTags: ['product'],
		}),
	}),
});

export const {
	useGetStoreQuery,
	useAddStoreMutation,
	useAddCategoryMutation,
	useGetCategoryQuery,
	useAddProductMutation,
	useGetProductQuery,
} = apiSlice;
