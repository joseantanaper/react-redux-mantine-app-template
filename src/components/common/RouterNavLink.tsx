import React from "react"
import { NavLink } from "@mantine/core"
import { NavLink as RNavLink } from "react-router-dom"
import css from "../../theme/theme.module.css"

const RouterNavLink = ({
  to,
  label,
  description,
  leftSection,
  rightSection,
}: any) => {
  return (
    <RNavLink to={to} className={css.navlink}>
      <NavLink
        label={label}
        description={description}
        leftSection={leftSection}
        rightSection
      ></NavLink>
    </RNavLink>
  )
}

export default RouterNavLink
