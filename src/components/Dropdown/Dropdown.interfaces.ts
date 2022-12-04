import { MenuProps } from "@mui/material"

import { Optional } from "../../types/types"

export interface DropdownProps extends Optional<Omit<MenuProps, "anchorEl">, "open"> {
  anchorEl?: JSX.Element
}
