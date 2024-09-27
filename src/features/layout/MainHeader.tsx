import React from "react"
import { Box, Group, Button, Burger, Title, Badge } from "@mantine/core"
import MainDrawer from "./MainDrawer"
import { useComputedColorScheme, useMantineColorScheme } from "@mantine/core"

import {
  IconSun,
  IconMoon,
  IconDeviceDesktop,
  IconDeviceMobile,
  IconUserCircle,
  IconLayoutSidebar,
  IconLayoutSidebarFilled,
  IconLayoutSidebarRight,
  IconLayoutSidebarRightFilled,
} from "@tabler/icons-react"

const MainHeader = ({ status, togglers }: any) => {
  const { colorScheme, setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme("light")

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark")
  }

  const sizes = {
    icon: "lg",
  }

  return (
    <>
      <Group w="60%" wrap="nowrap">
        <Button visibleFrom="sm" onClick={togglers[0]}>
          {!status[0] && <IconLayoutSidebar stroke={1} size={sizes.icon} />}
          {status[0] && <IconLayoutSidebarFilled size={sizes.icon} />}
        </Button>
        <Button hiddenFrom="sm" onClick={togglers[1]}>
          {!status[1] && <IconLayoutSidebar stroke={1} size={sizes.icon} />}
          {status[1] && <IconLayoutSidebarFilled size={sizes.icon} />}
        </Button>
        <Box>
          <Title order={3}>Header</Title>
        </Box>
        <Group visibleFrom="sm">
          <Badge leftSection={<IconDeviceDesktop />}>
            {status[0] ? "1" : "0"}
          </Badge>
          <Badge leftSection={<IconDeviceMobile />}>
            {status[1] ? "1" : "0"}
          </Badge>
          <Badge leftSection={<IconLayoutSidebarRight />}>
            {status[2] ? "1" : "0"}
          </Badge>
          <Badge leftSection={<IconUserCircle />}>
            {status[3] ? "1" : "0"}
          </Badge>
        </Group>
      </Group>
      <Group w="40%" miw={160} justify="flex-end" wrap="nowrap">
        <Button onClick={toggleColorScheme} variant="transparent">
          {computedColorScheme !== "light" && <IconSun stroke={1} size={24} />}
          {computedColorScheme !== "dark" && <IconMoon stroke={1} size={24} />}
        </Button>
        <Button onClick={togglers[2]} bg="red">
          {!status[2] && (
            <IconLayoutSidebarRight size={sizes.icon} stroke={1} />
          )}
          {status[2] && (
            <IconLayoutSidebarRightFilled size={sizes.icon} opacity={1} />
          )}
        </Button>
        <MainDrawer status={status[3]} toggler={togglers[3]} />
      </Group>
    </>
  )
}

export default MainHeader
