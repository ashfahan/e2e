import { Avatar, Box, Card, MenuItem } from "@mui/material"
import { FC } from "react"
import { Link } from "react-router-dom"
import { Dropdown } from "../../components/Dropdown"
import { ThemeChanger } from "../../components/ThemeChanger"
import { reset } from "../../redux/slice"
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks"

import { URL_DASHBOARD } from "../../router/routes"
import { ROLES } from "../../services"
import { HeaderProps } from "./Header.interfaces"

const UserPill = () => {
  const user = useAppSelector((store) => store.auth.user)
  const dispatch = useAppDispatch()

  return (
    <Dropdown
      anchorEl={
        <Card className="flex items-center p-2 rounded-3xl space-x-4 cursor-pointer pr-5">
          <Avatar alt="ProfilePicture" src={user?.picture} className="w-6 h-6 p-0 text-xs">
            {user?.firstName[0]}
            {user?.lastName[0]}
          </Avatar>

          <div>{user?.firstName}</div>
          <div className="before:content-[''] before:border-l before:mr-2 border-current">
            {user?.role || ROLES[Number(user?.role)]}
          </div>
        </Card>
      }
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      disablePortal
      classes={{ paper: "shadow mt-1" }}
    >
      <MenuItem onClick={() => dispatch(reset())}>Logout</MenuItem>
    </Dropdown>
  )
}

export const Header: FC<HeaderProps> = () => {
  const user = useAppSelector((state) => state.auth.user)

  return (
    <Box component="header" className="flex flex-wrap justify-between items-center py-2 px-4 ">
      <Card className="flex items-center p-2 rounded-3xl space-x-2 pr-4">
        <img src="assets/images/eth.svg" alt="logo" />
        <div>Trustable bridge</div>
      </Card>
      <div className="flex items-center space-x-2">
        {user && <UserPill />}
        <ThemeChanger />
      </div>
    </Box>
  )
}
