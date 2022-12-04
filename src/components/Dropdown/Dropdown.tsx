import { Button, Menu } from "@mui/material"
import { FC, useState } from "react"

import { DropdownProps } from "./Dropdown.interfaces"

export const Dropdown: FC<DropdownProps> = (props) => {
  const {
    anchorEl = (
      <Button color="secondary" variant="outlined" className="aspect-square p-2">
        <i className="fa-regular fa-ellipsis text-md" />
      </Button>
    ),
    children,
    open = false,
    ...rest
  } = props
  const [anchor, setAnchorEl] = useState<null | Element>(null)

  return (
    <>
      {{
        ...anchorEl,
        props: {
          ...anchorEl.props,
          onClick: ({ currentTarget }: { currentTarget: Element }) => setAnchorEl(currentTarget),
        },
      }}
      <Menu anchorEl={anchor} open={open || !!anchor} onClose={() => setAnchorEl(null)} {...rest}>
        {children}
      </Menu>
    </>
  )
}
