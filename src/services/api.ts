import { BaseQueryFn } from "@reduxjs/toolkit/query"
import { Axios, AxiosError, AxiosRequestConfig, AxiosResponse, Method } from "axios"

import { store } from "../redux"
import { reset } from "../redux/slice"
import { Response } from "../types/types"

export const axiosClient = new Axios({
  baseURL: process.env.REACT_APP_APIURL,
  headers: { "Content-Type": "application/json" },
})

axiosClient.interceptors.request.use((request) => {
  const token = store.getState().auth.accessToken

  if (token) request.headers = { ...request.headers, "security-Token": token }

  return request
})

axiosClient.interceptors.response.use((response: AxiosResponse<Response>) => {
  //
  // if response in data is string convert it to JSON
  //
  if (response.data && typeof response.data === "string") response.data = JSON.parse(response.data)

  //
  // if error got into response throw it into error
  //
  if (!response.status.toString().startsWith("2")) throw response

  return response
})

axiosClient.interceptors.response.use(undefined, (error: AxiosError<Response>) => {
  if (Number(error.status) === 401) store.dispatch(reset())

  throw error
})

type extraoptions = Partial<Omit<AxiosRequestConfig, "url" | "method" | "data" | "params">>

type Query = {
  url: string
  method?: Method
  formData?: boolean
  data?: AxiosRequestConfig["data"]
  params?: AxiosRequestConfig["params"]
}

type BaseQuery = BaseQueryFn<Query, Response, Response, extraoptions | ((value: Query) => extraoptions)>

export const axiosBaseQuery = (): BaseQuery => async (query, basequery, extraOptions) => {
  let { url, method = "get", data = undefined, params = undefined, formData } = query

  if (formData) {
    const formdata = new FormData()

    Object.entries(data).forEach(([key, value]) => {
      formdata.append(key, value as string | Blob)
    })

    data = formdata
  } else {
    data = JSON.stringify(data)
  }

  const result = await axiosClient
    .request({
      url,
      method,
      data,
      params,
      ...(typeof extraOptions === "function" ? extraOptions(query) : extraOptions),
    })
    .catch((error) => {
      throw error?.data?.message ?? error?.message ?? "Some Error Occured"
    })

  return { data: result.data }
}
