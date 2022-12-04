import { RouteObject } from "react-router-dom"

import { NotFound } from "../containers/NotFound"
import { Dashboard } from "../pages/Dashboard"
import { Login } from "../pages/Login"
import { Signup } from "../pages/Signup"

export interface RoutePram extends Record<string, string | undefined> {}

export function generateRoute(url: string, prams: RoutePram = {}) {
  return Object.entries(prams).reduce((acc, [key, value]) => acc.replace(`:${key}`, value ?? ""), url)
}

export interface Route extends RouteObject {
  name?: string
  children?: Route[]
  icon?: JSX.Element
}

export const URL_DASHBOARD = "/"
export const URL_LOGIN = "/Login"
export const URL_SIGNUP = "/Signup"

export const OPEN_ROUTES: Route[] = [
  {
    path: "*",
    element: <NotFound />,
  },
]

export const AUTHENTICATED_ROUTES: Route[] = [
  {
    path: URL_DASHBOARD,
    element: <Dashboard className="flex-grow md:p-10 p-5" />,
  },
]

export const UNAUTHENTICATED_ROUTES: Route[] = [
  {
    path: URL_LOGIN,
    element: <Login className="flex-grow p-0" />,
  },
  {
    path: URL_SIGNUP,
    element: <Signup className="flex-grow p-0" />,
  },
]
