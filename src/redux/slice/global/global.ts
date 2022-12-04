import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { GlobalStore } from "./Global.interface"

const initialState: GlobalStore = {
  sendVerificationEmail: true,
  sidebarOpen: true,
}

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setSendAccountVerificationEmail: (state, { payload }: PayloadAction<boolean>): GlobalStore => {
      return { ...state, sendVerificationEmail: payload }
    },
    setsidebarOpen: (state, { payload }: PayloadAction<boolean>): GlobalStore => {
      return { ...state, sidebarOpen: payload }
    },
  },
})

export const { setSendAccountVerificationEmail, setsidebarOpen } = globalSlice.actions
export default globalSlice.reducer
