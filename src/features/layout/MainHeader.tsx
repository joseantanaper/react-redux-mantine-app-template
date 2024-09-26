import React from "react"
import { Box, Group, Button, Burger, Title, Badge } from "@mantine/core"
import MainDrawer from "./MainDrawer"
import { useComputedColorScheme, useMantineColorScheme } from "@mantine/core"

import {
  IconSun,
  IconMoon,
  IconDeviceDesktop,
  IconDeviceMobile,
  IconLayoutSidebarRight,
  IconUserCircle,
  IconLayoutSidebarLeftExpand,
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarRightExpand,
  IconLayoutSidebarRightCollapse,
} from "@tabler/icons-react"

const MainHeader = ({ status, togglers }: any) => {
  const { colorScheme, setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme("light")

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark")
  }

  return (
    <>
      <Group w="60%" wrap="nowrap">
        <Button variant="transparent" size="lg" p="xs" onClick={togglers[0]}>
          {!status[0] && <IconLayoutSidebarLeftExpand size={40} stroke={0.4} />}
          {status[0] && <IconLayoutSidebarLeftCollapse size={40} stroke={1} />}
        </Button>
        {/* <Burger
          opened={status[0]}
          onClick={togglers[0]}
          visibleFrom="sm"
          aria-label="Desktop"
        /> */}
        <Burger
          opened={status[1]}
          onClick={togglers[1]}
          hiddenFrom="sm"
          aria-label="Mobile"
        />
        <Box>
          <Title order={3}>Header</Title>
        </Box>
        <Group visibleFrom="sm">
          <Badge leftSection={<IconDeviceDesktop size={14} />}>
            {status[0] ? "1" : "0"}
          </Badge>
          <Badge leftSection={<IconDeviceMobile size={14} />}>
            {status[1] ? "1" : "0"}
          </Badge>
          <Badge leftSection={<IconLayoutSidebarRight size={14} />}>
            {status[2] ? "1" : "0"}
          </Badge>
          <Badge leftSection={<IconUserCircle size={14} />}>
            {status[3] ? "1" : "0"}
          </Badge>
        </Group>
      </Group>
      <Group w="40%" miw={160} justify="flex-end" wrap="nowrap">
        <Button onClick={toggleColorScheme} variant="transparent">
          {computedColorScheme !== "light" && <IconSun color="#555" />}
          {computedColorScheme !== "dark" && <IconMoon color="#ccc" />}
        </Button>
        <Button variant="transparent" size="lg" p="xs" onClick={togglers[2]}>
          {!status[2] && (
            <IconLayoutSidebarRightExpand size={40} stroke={1} opacity={0.4} />
          )}
          {status[2] && (
            <IconLayoutSidebarRightCollapse size={40} stroke={1} opacity={1} />
          )}
        </Button>
        <MainDrawer status={status[3]} toggler={togglers[3]} />
      </Group>
    </>
  )
}

export default MainHeader
