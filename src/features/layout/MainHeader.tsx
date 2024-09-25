import React from "react"
import { Box, Group, Button, Burger } from "@mantine/core"
import MainDrawer from "./MainDrawer"

const MainHeader = ({ status, togglers }: any) => {
  return (
    <>
      <Group w="60%" wrap="nowrap">
        <Burger
          opened={status[0]}
          onClick={togglers[0]}
          visibleFrom="sm"
          aria-label="Desktop"
        />
        <Burger
          opened={status[1]}
          onClick={togglers[1]}
          hiddenFrom="sm"
          aria-label="Mobile"
        />
        Header | D:{status[0] ? "1" : "0"} M: {status[1] ? "1" : "0"} A:
        {status[2] ? "1" : "0"}
      </Group>
      <Group w="40%" miw={300} justify="flex-end" bg="red" wrap="nowrap">
        <Burger
          opened={status[2]}
          onClick={togglers[2]}
          visibleFrom="lg"
          aria-label="ASide"
        />
        <MainDrawer status={status[3]} toggler={togglers[3]} />
      </Group>
    </>
  )
}

export default MainHeader
