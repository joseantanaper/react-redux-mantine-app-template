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
} from "@mantine/core"
import MainHeader from "./layout/MainHeader"
import { useDisclosure } from "@mantine/hooks"
import "@mantine/core/styles.css"
import css from "./App.module.css"
import MainNavbar from "./layout/MainNavbar"
import MainFooter from "./layout/MainFooter"
import MainAside from "./layout/MainAside"
import MainSkeleton from "./layout/MainSkeleton"

const App = () => {
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
      <AppShell.Header className={css.header}>
        <MainHeader
          status={[desktopOpened, mobileOpened, asideOpened, drawerOpened]}
          togglers={[toggleDesktop, toggleMobile, toggleAside, toggleDrawer]}
        />
      </AppShell.Header>
      <AppShell.Navbar>
        <MainNavbar />
      </AppShell.Navbar>

      <AppShell.Main>
        <ScrollArea h="100%">
          <Container fluid pb={40}>
            <MainSkeleton count={150} />
          </Container>
        </ScrollArea>
      </AppShell.Main>

      <AppShell.Aside visibleFrom="lg">
        <MainAside />
      </AppShell.Aside>

      <AppShell.Footer className={css.footer}>
        <MainFooter />
      </AppShell.Footer>
    </AppShell>
  )
}

export default App
