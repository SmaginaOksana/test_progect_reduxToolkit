import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IComment } from "../interfaces";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    getComments: builder.query<IComment[], string>({
      query: (postId) => `/comments?postId=${postId}`,
      providesTags: ["Comments"],
    }),
  }),
});

export const { useGetCommentsQuery } = commentsApi;
