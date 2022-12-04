import { Button } from "@mui/material"
import { startCase } from "lodash"
import { FC, useMemo } from "react"
import { getTheme } from "../../helpers/getTheme"
import { setTheme, ThemeOptions } from "../../redux/slice"
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks"
import { ThemeChangerProps } from "./ThemeChanger.interface"

const THEMES: { label: string; value: ThemeOptions; icon: JSX.Element; className: string }[] = [
  {
    label: "Light",
    value: "light",
    className: "text-white bg-black",
    icon: <i className="fa-solid fa-sun" />,
  },
  {
    label: "Dark",
    value: "dark",
    className: "text-black bg-white",
    icon: <i className="fa-solid fa-moon" />,
  },
]

export const ThemeChanger: FC<ThemeChangerProps> = (props) => {
  const { className } = props

  const dispatch = useAppDispatch()
  const theme = useAppSelector((store) => store.userSettings.theme)

  const selected = useMemo(() => {
    const { name } = getTheme(theme)
    return THEMES.find((item) => item.value === name)
  }, [theme])

  const onChange = () => {
    const selectedIndex = THEMES.findIndex((item) => item.value === selected?.value)
    const nextTheme: ThemeOptions | undefined =
      theme === "auto" ? "light" : selectedIndex + 1 >= THEMES.length ? "auto" : THEMES.at(selectedIndex + 1)?.value

    if (nextTheme) dispatch(setTheme(nextTheme))
  }

  return (
    <Button className={`${selected?.className} shadow border py-1 px-3 rounded-full ${className}`} onClick={onChange}>
      <div className="flex space-x-2">
        <div>{startCase(theme)}</div>
        <div>{selected?.icon}</div>
      </div>
    </Button>
  )
}
