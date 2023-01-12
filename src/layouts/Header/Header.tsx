import DehazeIcon from "@mui/icons-material/Dehaze"
import HomeIcon from "@mui/icons-material/Home"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import LoginIcon from "@mui/icons-material/Login"
import PersonIcon from "@mui/icons-material/Person"
import { Avatar, Box, Button, Card, IconButton, Menu, MenuItem } from "@mui/material"
import { FC, useState } from "react"
import { Dropdown } from "../../components/Dropdown"
import { reset } from "../../redux/slice"
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks"

import { ROLES } from "../../services"
import { HeaderProps } from "./Header.interfaces"

const UserPill = () => {
  const user = useAppSelector((store) => store.auth.user)
  const dispatch = useAppDispatch()

  return (
    <Dropdown
      anchorEl={
        <Card className="flex items-center p-2 rounded-3xl space-x-2 cursor-pointer pr-5">
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

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box component="header" className="flex flex-wrap justify-between items-center py-2 px-4 bg-gray-900">
      <div className="flex items-center">
        <IconButton className="text-white">
          <DehazeIcon fontSize="large" />
        </IconButton>
        <div className="text-2xl text-orange-400 text">TRUSTABLE</div>
        <div className="text-2xl text-green-800 pl-2">BRIDGE</div>
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outlined"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
        >
          Ashfahan
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <HomeIcon className="mr-5" />
            Home
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <PersonIcon className="mr-5" />
            Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <LoginIcon className="mr-5" />
            Logout
          </MenuItem>
        </Menu>
      </div>
    </Box>
  )
}
