import React from "react"
import {
  Box,
  Group,
  Button,
  Burger,
  Title,
  Badge,
  Divider,
} from "@mantine/core"
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
import Clock from "./widget/Clock"

const MainHeader = ({ status, togglers }: any) => {
  const { colorScheme, setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme("light")

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark")
  }

  const sizes = {
    icon: 36,
  }

  const HeaderBadges = () =>
    status?.map((st: any, idx: number) => (
      <Badge
        leftSection={
          [
            <IconDeviceDesktop size={14} />,
            <IconDeviceMobile size={14} />,
            <IconLayoutSidebarRight size={14} />,
            <IconUserCircle size={14} />,
          ][idx]
        }
        size="lg"
        miw={50}
        fw={100}
        px="xs"
      >
        {st ? "1" : "0"}
      </Badge>
    ))

  return (
    <>
      <Group w="60%" wrap="nowrap">
        <Button visibleFrom="sm" onClick={togglers[0]}>
          {!status[0] && <IconLayoutSidebar size={sizes.icon} />}
          {status[0] && <IconLayoutSidebarFilled size={sizes.icon} />}
        </Button>
        <Button hiddenFrom="sm" onClick={togglers[1]}>
          {!status[1] && <IconLayoutSidebar size={sizes.icon} />}
          {status[1] && <IconLayoutSidebarFilled size={sizes.icon} />}
        </Button>
        <Box>
          <Title order={3}>Header</Title>
        </Box>
        <HeaderBadges />
      </Group>

      <Group w="40%" miw={160} justify="flex-end" wrap="nowrap">
        <Clock />
        <Divider orientation="vertical" m="xs" size="xs" />
        <Button onClick={toggleColorScheme} variant="transparent">
          {computedColorScheme !== "light" && <IconSun size={24} />}
          {computedColorScheme !== "dark" && <IconMoon size={24} />}
        </Button>
        <Button onClick={togglers[2]} bg="red">
          {!status[2] && <IconLayoutSidebarRight size={sizes.icon} />}
          {status[2] && <IconLayoutSidebarRightFilled size={sizes.icon} />}
        </Button>
        <MainDrawer status={status[3]} toggler={togglers[3]} />
      </Group>
    </>
  )
}

export default MainHeader
