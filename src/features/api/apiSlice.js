import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
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
		}),
		addStore: builder.mutation({
			query: (initialStore) => ({
				url: '/store',
				method: 'POST',
				body: initialStore,
			}),
		}),
	}),
});

export const { useGetStoreQuery, useAddStoreMutation } = apiSlice;
