import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://graphqlzero.almansi.me',
        prepareHeaders: (headers) => {
            headers.set('accept', 'application/json');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getUsers: builder.mutation({
            query: (body) => ({
                url: '/api',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useGetUsersMutation } = apiSlice;
