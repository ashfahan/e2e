import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { setCookie } from "react-use-cookie"

import { User } from "../../../services"
import { AuthStore } from "./Auth.interface"

const initialState: AuthStore = {
  user: undefined,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: () => {
      localStorage.clear()
      sessionStorage.clear()
      setCookie("token", "")
      return initialState
    },

    setUser: (state, { payload }: PayloadAction<User>): AuthStore => {
      return { ...state, user: payload }
    },
  },
})

export const { reset, setUser } = authSlice.actions
export default authSlice.reducer
