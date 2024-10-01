import React from "react"
import {
  AppShell,
  Grid,
  Group,
  Button,
  Box,
  Burger,
  Skeleton,
  Container,
  ScrollArea,
  Title,
  Divider,
  Affix,
  Stack,
  useMatches,
} from "@mantine/core"
import MainHeader from "../components/layout/MainHeader"
import { useDisclosure } from "@mantine/hooks"
import "@mantine/core/styles.css"
import MainNavbar from "../components/layout/MainNavbar"
import MainFooter from "../components/layout/MainFooter"
import MainAside from "../components/layout/MainAside"
import MainSkeleton from "../components/layout/MainSkeleton"
import { Outlet } from "react-router-dom"
import css from "../theme/theme.module.css"
import { IconGridDots } from "@tabler/icons-react"

const Root = () => {
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true)
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure(false)
  const [asideOpened, { toggle: toggleAside }] = useDisclosure(true)
  const [drawerOpened, { toggle: toggleDrawer }] = useDisclosure(false)

  const media = useMatches({
    base: "base",
    xs: "xs",
    sm: "sm",
    md: "md",
    xl: "xl",
  })
  const appShellBase = {
    deviceBreakpoint: "sm",
    headerSize: 60,
    asideSize: 240,
    asideBreakpoint: "lg",
    navbarSize: 300,
    mainPadding: 40,
  }

  return (
    <AppShell
      header={{ height: appShellBase.headerSize }}
      footer={{ height: appShellBase.headerSize }}
      navbar={{
        width: appShellBase.navbarSize,
        breakpoint: appShellBase.deviceBreakpoint,
        collapsed: {
          desktop: !desktopOpened,
          mobile: !mobileOpened,
        },
      }}
      aside={{
        width: appShellBase.asideSize,
        breakpoint: appShellBase.asideBreakpoint,
        collapsed: {
          desktop: !asideOpened,
          mobile: !asideOpened,
        },
      }}
    >
      <AppShell.Header>
        <MainHeader
          title="HEADER"
          subtitle={media}
          status={[desktopOpened, mobileOpened, asideOpened, drawerOpened]}
          togglers={[toggleDesktop, toggleMobile, toggleAside, toggleDrawer]}
        />
      </AppShell.Header>
      <AppShell.Navbar>
        <MainNavbar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Stack gap="xl">
          <Container
            fluid
            w="100%"
            h={appShellBase.headerSize}
            pos="fixed"
            top={appShellBase.headerSize}
            className={css.subheader}
          >
            <Group w="100%">
              <IconGridDots opacity={0.2} />
              SUBHEADER
            </Group>
          </Container>

          <Container
            fluid
            mx="xl"
            mt={appShellBase.headerSize + appShellBase.mainPadding}
            mb={appShellBase.headerSize + appShellBase.mainPadding}
          >
            <Outlet />
          </Container>

          <Container
            fluid
            w="100%"
            h={appShellBase.headerSize}
            pos="fixed"
            bottom={appShellBase.headerSize}
            className={css.subfooter}
          >
            <Group w="100%">
              <IconGridDots opacity={0.2} />
              SUBFOOTER
            </Group>
          </Container>
        </Stack>
      </AppShell.Main>

      <AppShell.Aside visibleFrom="lg" zIndex={1024}>
        <MainAside />
      </AppShell.Aside>

      <AppShell.Footer>
        <MainFooter />
      </AppShell.Footer>
    </AppShell>
  )
}

export default Root
