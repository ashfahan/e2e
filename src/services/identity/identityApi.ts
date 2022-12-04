import { setToken, setUser } from "../../redux/slice"
import { Response } from "../../types/types"
import { rtkApi } from "../rtk"
import { LoginDto, SignupDto, User } from "./identity.interfaces"

export const identityApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    Login: builder.mutation<Response<{ user: User; token: string }>, LoginDto>({
      query: ({ languageId = 0, ...rest }) => ({
        url: "/api/identity/User/LoginUser",
        method: "post",
        data: { languageId, ...rest },
      }),
      invalidatesTags: [{ type: "user" }],
      onQueryStarted(_, { dispatch, queryFulfilled }) {
        queryFulfilled.then((response) => {
          dispatch(setUser(response.data.user))
          dispatch(setToken(response.data.token))
        })
      },
    }),
    Signup: builder.mutation<Response, SignupDto>({
      query: (data) => ({
        url: "/api/identity/User/LoginUser",
        method: "post",
        data,
      }),
      invalidatesTags: [{ type: "user" }],
    }),
  }),
})

export const { useLoginMutation, useSignupMutation } = identityApi
