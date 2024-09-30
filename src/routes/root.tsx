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

const Root = () => {
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true)
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure(false)
  const [asideOpened, { toggle: toggleAside }] = useDisclosure(true)
  const [drawerOpened, { toggle: toggleDrawer }] = useDisclosure(false)

  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: {
          desktop: !desktopOpened,
          mobile: !mobileOpened,
        },
      }}
      aside={{
        width: 300,
        breakpoint: "lg",
        collapsed: {
          desktop: !asideOpened,
          mobile: !asideOpened,
        },
      }}
    >
      <AppShell.Header>
        <MainHeader
          status={[desktopOpened, mobileOpened, asideOpened, drawerOpened]}
          togglers={[toggleDesktop, toggleMobile, toggleAside, toggleDrawer]}
        />
      </AppShell.Header>
      <AppShell.Navbar zIndex={1024}>
        <MainNavbar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Stack gap="xl">
          <Container
            fluid
            className={css.subheader}
            h={60}
            style={{
              position: "fixed",
              top: 60,
              left: desktopOpened ? 300 : 0,
              right: asideOpened ? 300 : 0,
            }}
          >
            ####
          </Container>
          <Container fluid m="xl" mt={60 + 20} mb={60 + 20}>
            <Outlet />
          </Container>
          <Container
            fluid
            className={css.subfooter}
            h={60}
            style={{
              position: "fixed",
              bottom: 60,
              left: desktopOpened ? 300 : 0,
              right: asideOpened ? 300 : 0,
            }}
          >
            ####
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
