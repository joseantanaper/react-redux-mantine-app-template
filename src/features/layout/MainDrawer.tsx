import React from "react"
import { Drawer } from "@mantine/core"
import { Button } from "@mantine/core"
import css from "./MainDrawer.module.css"

const MainDrawer = ({ status, toggler }: any) => {
  return (
    <>
      <Drawer
        className={css.drawer}
        opened={status}
        onClose={toggler}
        title="Config"
        position="right"
        overlayProps={{ backgroundOpacity: 0.6, blur: 4 }}
      ></Drawer>

      <Button onClick={toggler}>D</Button>
    </>
  )
}

export default MainDrawer
