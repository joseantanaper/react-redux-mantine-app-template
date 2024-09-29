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

const MainHeader = ({ status, togglers }: any) => {
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
      <Group w="20%" miw="60" wrap="nowrap">
        <Button visibleFrom="sm" onClick={togglers[0]}>
          {!status[0] && <IconLayoutSidebar size={sizes.togglerIcon} />}
          {status[0] && <IconLayoutSidebarFilled size={sizes.togglerIcon} />}
        </Button>
        <Button hiddenFrom="sm" onClick={togglers[1]}>
          {!status[1] && <IconLayoutSidebar size={sizes.togglerIcon} />}
          {status[1] && <IconLayoutSidebarFilled size={sizes.togglerIcon} />}
        </Button>
        <Box visibleFrom="xs">
          <Title order={3}>Header</Title>
        </Box>
      </Group>

      <Group w="80%" justify="flex-end" wrap="nowrap">
        <HeaderBadges />
        <Divider orientation="vertical" visibleFrom="lg" />
        <Clock />
        <Divider orientation="vertical" visibleFrom="xl" />
        <SegmentedControl
          visibleFrom="xl"
          withItemsBorders={false}
          color={theme.primaryColor}
          data={[
            {
              value: "light",
              label: (
                <Group wrap="nowrap">
                  <IconSun />
                  <VisuallyHidden>Light</VisuallyHidden>
                </Group>
              ),
            },
            {
              value: "dark",
              label: (
                <Group wrap="nowrap">
                  <IconMoon />
                  <VisuallyHidden>Dark</VisuallyHidden>
                </Group>
              ),
            },
            {
              value: "auto",
              label: (
                <Group wrap="nowrap">
                  <IconContrast />
                  <VisuallyHidden>Auto</VisuallyHidden>
                </Group>
              ),
            },
          ]}
        />

        <Group visibleFrom="xl">
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
        </Group>
        <MainDrawer status={status[3]} toggler={togglers[3]} />
      </Group>
    </>
  )
}

export default MainHeader
