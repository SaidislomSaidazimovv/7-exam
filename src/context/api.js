import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({
  baseUrl: "https://fakestoreapi.com",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("authentication", `${token}`);
    }
    return headers;
  },
});
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });
export const api = createApi({
  reducerPath: "mainApi",
  baseQuery: baseQueryWithRetry,
  tagTypes: ["Product", "User"],
  endpoints: () => ({}),
});