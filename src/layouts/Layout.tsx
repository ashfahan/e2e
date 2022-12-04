import { CssBaseline, ThemeProvider } from "@mui/material"
import React, { useMemo } from "react"
import { matchRoutes, Navigate, useLocation } from "react-router-dom"

import { getTheme } from "../helpers/getTheme"
import { useAppSelector } from "../redux/store/hooks"
import { AUTHENTICATED_ROUTES, UNAUTHENTICATED_ROUTES, URL_DASHBOARD, URL_LOGIN, URL_SIGNUP } from "../router/routes"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { LayoutProps } from "./Layout.interfaces"

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation()
  const token = useAppSelector((store) => store.auth.accessToken)
  const theme = useAppSelector((store) => store.userSettings.theme)
  const isAuthenticated = !!token
  const ThemeSelected = useMemo(() => getTheme(theme), [theme])

  const fullPage = [URL_LOGIN, URL_SIGNUP].includes(pathname)
  const authenticated_route = !!matchRoutes(AUTHENTICATED_ROUTES, pathname)?.length
  const unauthenticated_route = !!matchRoutes(UNAUTHENTICATED_ROUTES, pathname)?.length

  if (!isAuthenticated && authenticated_route) return <Navigate to={URL_LOGIN} />
  if (isAuthenticated && unauthenticated_route) return <Navigate to={URL_DASHBOARD} replace />

  return (
    <ThemeProvider theme={ThemeSelected.theme}>
      <CssBaseline />
      <div className={`flex ${ThemeSelected.name === "dark" && "dark"}`}>
        <div className="flex-1 flex flex-grow flex-col justify-between h-full min-h-screen">
          {!fullPage && <Header />}
          {children(isAuthenticated)}
          {!fullPage && <Footer />}
        </div>
      </div>
    </ThemeProvider>
  )
}
