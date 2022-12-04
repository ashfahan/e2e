import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ThemeOptions, UserSettingsInterface } from "./userSettings.interface"

const initialState: UserSettingsInterface = {
  theme: "auto",
}

export const userSettingsSlice = createSlice({
  name: "userSettings",
  initialState,
  reducers: {
    setTheme: (state, { payload }: PayloadAction<ThemeOptions>): UserSettingsInterface => {
      return { ...state, theme: payload }
    },
  },
})

export const { setTheme } = userSettingsSlice.actions
export default userSettingsSlice.reducer
