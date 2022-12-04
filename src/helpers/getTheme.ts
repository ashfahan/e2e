import { Theme } from "@mui/system"
import { ThemeOptions } from "../redux/slice"
import { DARKTHEME, LIGHTTHEME } from "../styles/MuiTheme"

export const getTheme = (theme: ThemeOptions): { theme: Theme; name: Omit<ThemeOptions, "auto"> } => {
  const name = theme === "auto" ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : theme
  return { theme: name === "dark" ? DARKTHEME : LIGHTTHEME, name }
}
