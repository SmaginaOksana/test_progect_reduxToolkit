import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IPost } from "../interfaces";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], void>({
      query: () => `/posts`,
      providesTags: ["Posts"],
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
