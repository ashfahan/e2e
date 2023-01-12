import ArrowRightIcon from "@mui/icons-material/ArrowRight"
import AssessmentIcon from "@mui/icons-material/Assessment"
import PersonIcon from "@mui/icons-material/Person"
import { ListItem, ListItemButton, ListItemIcon, Tooltip } from "@mui/material"
import { FC, useState } from "react"
import { NavLink } from "react-router-dom"
import { URL_DASHBOARD } from "../../router/routes"
import { SideBarProps } from "./SideBar.interfaces"

export const SideBar: FC<SideBarProps> = (props) => {
  const { className } = props
  const [menu, setMenu] = useState()

  const Submenu = () => {
    setMenu(menu)
  }

  return (
    <div
      className={`${className} bg-[#d9d9d9] scrollbar flex h-[calc(100vh-63px)] flex-col justify-between overflow-y-auto overflow-x-hidden pb-5`}
    >
      <div>
        <NavLink
          className={({ isActive }) => `${isActive && "pointer-events-none"} block text-inherit`}
          to={URL_DASHBOARD}
          end
        >
          {({ isActive }) => (
            <Tooltip title={"Dashboard"} placement="right">
              <ListItem className="items-center p-0">
                <ListItemButton
                  selected={isActive}
                  classes={{
                    selected: "border-primary  bg-transparent",
                    root: "pl-6 pr-3 border-l-4 border-solid h-14",
                  }}
                  className={!isActive ? "border-transparent" : ""}
                >
                  <ListItemIcon className="min-w-[40px]">
                    <i className="fa-regular fa-gauge text-xl" />
                  </ListItemIcon>
                  <div className="font-bold">Dashboard</div>
                </ListItemButton>
              </ListItem>
            </Tooltip>
          )}
        </NavLink>{" "}
        <NavLink
          className={({ isActive }) => `${isActive && "pointer-events-none"} block text-inherit`}
          to={URL_DASHBOARD}
          end
        >
          {({ isActive }) => (
            <Tooltip title={"Credit Assessment"} placement="right">
              <ListItem className="items-center p-0">
                <ListItemButton
                  selected={isActive}
                  classes={{
                    selected: "border-primary border-white bg-transparent",
                    root: "pl-6 pr-3 border-l-4 border-solid h-14",
                  }}
                  className={!isActive ? "border-transparent" : ""}
                >
                  <ListItemIcon className="min-w-[40px]">
                    <AssessmentIcon />
                  </ListItemIcon>
                  <div className="font-bold">Credit Assessment</div>
                </ListItemButton>
              </ListItem>
            </Tooltip>
          )}
        </NavLink>
        <NavLink
          className={({ isActive }) => `${isActive && "pointer-events-none"} block text-inherit`}
          to={URL_DASHBOARD}
          end
        >
          {({ isActive }) => (
            <Tooltip title={"Due Diligence"} placement="right">
              <ListItem className="items-center p-0">
                <ListItemButton
                  selected={isActive}
                  classes={{
                    selected: "border-primary border-white bg-transparent",
                    root: "pl-6 pr-3 border-l-4 border-solid h-14",
                  }}
                  className={!isActive ? "border-transparent" : ""}
                >
                  <ListItemIcon className="min-w-[40px]">
                    <PersonIcon />
                  </ListItemIcon>
                  <div className="flex items-center justify-between w-full">
                    <div className="font-bold">Due Diligence</div>
                    <ArrowRightIcon />
                  </div>
                </ListItemButton>
              </ListItem>
            </Tooltip>
          )}
        </NavLink>
      </div>
    </div>
  )
}
