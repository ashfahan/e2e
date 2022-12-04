import { Color, colors } from "@mui/material"

export const lang = {
  loading: "Processing",
  error: "Some Error Occured",
  Orgaization_Created_Sucessfully: "Orgaization Created Sucessfully",
}

export const RADIAN = Math.PI / 180

export const COLORS = Object.entries(colors).map(([key, value]: [string, Color | any]) => value[500])
