import { createApi } from "@reduxjs/toolkit/query/react"
import { axiosBaseQuery } from "./api"

export const rtkApi = createApi({
  reducerPath: "rtkApi",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["user", "analysis"],
  endpoints: (builder) => ({}),
})

// eslint-disable-next-line no-empty-pattern
export const {} = rtkApi
