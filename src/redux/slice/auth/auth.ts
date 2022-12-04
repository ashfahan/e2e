import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "../../../services/identity"

import { AuthStore } from "./Auth.interface"

const initialState: AuthStore = {
  accessToken: undefined,
  user: undefined,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      localStorage.clear()
      sessionStorage.clear()
      return initialState
    },
    setToken: (state, { payload }: PayloadAction<string>): AuthStore => {
      return { ...state, accessToken: payload }
    },
    setUser: (state, { payload }: PayloadAction<User>): AuthStore => {
      return { ...state, user: payload }
    },
  },
})

export const { reset, setToken, setUser } = authSlice.actions
export default authSlice.reducer
