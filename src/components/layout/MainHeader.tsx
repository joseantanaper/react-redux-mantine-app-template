import React from "react"
import {
  Box,
  Group,
  Button,
  Burger,
  Title,
  Badge,
  Divider,
  Text,
  SegmentedControl,
  VisuallyHidden,
  Flex,
  Container,
} from "@mantine/core"
import MainDrawer from "./MainDrawer"
import {
  useComputedColorScheme,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core"

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
  IconContrast,
} from "@tabler/icons-react"
import Clock from "./widget/Clock"

const MainHeader = ({ title, subtitle, status, togglers }: any) => {
  const { colorScheme, setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme("light")
  const theme = useMantineTheme()

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark")
  }

  const sizes = {
    togglerIcon: 32,
    btnIcon: 20,
  }

  const HeaderBadges = () =>
    status?.map((st: any, idx: number) => (
      <Badge
        visibleFrom="lg"
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
      <Flex w="100%" justify={"space-between"}>
        <Group>
          <Button visibleFrom="sm" onClick={togglers[0]}>
            {!status[0] && <IconLayoutSidebar size={sizes.togglerIcon} />}
            {status[0] && <IconLayoutSidebarFilled size={sizes.togglerIcon} />}
          </Button>
          <Button hiddenFrom="sm" onClick={togglers[1]}>
            {!status[1] && <IconLayoutSidebar size={sizes.togglerIcon} />}
            {status[1] && <IconLayoutSidebarFilled size={sizes.togglerIcon} />}
          </Button>
          <Title order={2}>{title}</Title>
          <Title order={3} fw={300} opacity={0.6} textWrap="nowrap">
            {subtitle}
          </Title>
        </Group>
        <Group visibleFrom="md" justify="center">
          Middle Area of a Pixel Perfect Layout
        </Group>
        <Group justify="flex-end" mr="md">
          <Group visibleFrom="sm" justify="center">
            <HeaderBadges />
            <Clock />
          </Group>
          <Button onClick={toggleColorScheme}>
            {computedColorScheme !== "light" && (
              <IconSun size={sizes.btnIcon} />
            )}
            {computedColorScheme !== "dark" && (
              <IconMoon size={sizes.btnIcon} />
            )}
          </Button>
          <Button onClick={togglers[2]} visibleFrom="lg">
            {!status[2] && <IconLayoutSidebarRight size={sizes.btnIcon} />}
            {status[2] && <IconLayoutSidebarRightFilled size={sizes.btnIcon} />}
          </Button>
          <MainDrawer status={status[3]} toggler={togglers[3]} />
        </Group>
      </Flex>
    </>
  )
}

export default MainHeader
