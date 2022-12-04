import { createTheme, ThemeOptions as MuiThemeOptions } from "@mui/material"
import merge from "deepmerge"
import { CSSProperties } from "react"
import { DefaultColors } from "tailwindcss/types/generated/colors"
export const colors = require("tailwindcss/colors") as DefaultColors

export interface ThemeOptions extends MuiThemeOptions {
  components?: MuiThemeOptions["components"] & {
    MuiSelect?: {
      styleOverrides?: {
        root?: CSSProperties
      }
    }
  }
}

export const themeColor = merge(colors, {
  primary: {
    main: "#2257FF",
    light: "#7495FF",
    dark: "#001D79",
  },
  secondary: {
    main: colors.neutral[700],
    light: colors.neutral[400],
    dark: colors.neutral[900],
  },
})

const LIGHT: ThemeOptions = {
  palette: {
    ...themeColor,
    grey: themeColor.neutral,
    common: {
      black: themeColor.black,
      white: themeColor.white,
    },
    background: {
      default: themeColor.neutral[100],
      paper: themeColor.white,
    },
  },
  typography: {
    fontFamily: [
      "Gilroy",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontSize: 14,
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        multiline: { paddingTop: "0 !important", paddingBottom: "0 !important" },
        inputSizeSmall: { paddingTop: ".25rem !important", paddingBottom: ".25rem !important" },
        input: { paddingTop: ".7rem !important", paddingBottom: ".7rem !important" },
        adornedStart: { paddingLeft: ".5rem !important", "& svg": { marginRight: ".25rem" } },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: { paddingTop: "0 !important", paddingBottom: "0 !important" },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { minWidth: "unset", textTransform: "inherit", boxShadow: "none", ":hover": { boxShadow: "none" } },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: { color: "inherit" },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: { background: "inherit" },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: { background: "inherit", color: "inherit" },
      },
    },
    MuiList: {
      styleOverrides: {
        root: { background: "inherit" },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0px 12px 23px 0px rgb(62 73 84 / 4%)",
          padding: "2rem",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: { fontSize: "inherit" },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "&::before,&::after": { content: "none" },
          background: "transparent",
          "&:hover": {
            background: "transparent",
          },
        },
        filled: {
          margin: "0px -1px",
          border: "1px solid",
          borderRadius: "4px",

          "&.Mui-focused:after": { opacity: 1 },
          "& fieldset": { border: 0 },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiFilledInput-root": {
            backgroundColor: themeColor.gray[100],
            borderRadius: "4px",

            "&.Mui-focused:after": { opacity: 1 },
            "& fieldset": { border: 0 },
            "&::before,&::after": { content: "none" },
          },
        },
      },
    },

  },
}

const DARK: ThemeOptions = merge(
  { ...LIGHT },
  {
    palette: {
      mode: "dark",
      grey: {
        "50": themeColor.neutral[50],
        "100": themeColor.neutral[900],
        "200": themeColor.neutral[800],
        "300": themeColor.neutral[700],
        "400": themeColor.neutral[600],
        "500": themeColor.neutral[500],
        "600": themeColor.neutral[400],
        "700": themeColor.neutral[300],
        "800": themeColor.neutral[200],
        "900": themeColor.neutral[100],
      },
      secondary: {
        main: colors.neutral[300],
        light: colors.neutral[600],
        dark: colors.neutral[100],
      },
      common: {
        black: themeColor.white,
        white: themeColor.black,
      },
      background: {
        default: themeColor.neutral[900],
        paper: themeColor.black,
      },
    },
  }
)

export const LIGHTTHEME = createTheme(LIGHT)
export const DARKTHEME = createTheme(DARK)
