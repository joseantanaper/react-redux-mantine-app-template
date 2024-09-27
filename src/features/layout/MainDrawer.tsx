import React from "react"
import { Avatar, Drawer, Group, Image } from "@mantine/core"
import { Button } from "@mantine/core"
import css from "./MainDrawer.module.css"
import MainSkeleton from "./MainSkeleton"

const MainDrawer = ({ status, toggler }: any) => {
  return (
    <>
      <Drawer opened={status} onClose={toggler}>
        <Group>
          <Avatar
            size="xl"
            src="https://www.metalgearinformer.com/wp-content/uploads/2016/01/MGSV-PS4-Avatar-Venom-Snake.jpg"
          />
          Big Boss is watching you
        </Group>
        <MainSkeleton />
      </Drawer>
      <Avatar
        href="#"
        onClick={toggler}
        className={css.avatar}
        src="https://www.metalgearinformer.com/wp-content/uploads/2016/01/MGSV-PS4-Avatar-Venom-Snake.jpg"
      />
    </>
  )
}

export default MainDrawer
