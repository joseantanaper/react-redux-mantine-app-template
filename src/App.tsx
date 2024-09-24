import React from "react"
import {
  AppShell,
  Group,
  Box,
  Burger,
  Skeleton,
  Container,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import "@mantine/core/styles.css"
import css from "./theme/App.module.css"

const App = () => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure()
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true)
  const [asideOpened, { toggle: toggleAside }] = useDisclosure(true)
  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: {
          mobile: !mobileOpened,
          desktop: !desktopOpened,
        },
      }}
      aside={{
        width: 300,
        breakpoint: "md",
        collapsed: {
          desktop: !asideOpened,
          mobile: !asideOpened,
        },
      }}
      // padding="md"
    >
      <AppShell.Header className={css.header}>
        <Box className={css.boxStart}>
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="lg"
            m="xs"
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            size="lg"
            m="xs"
            visibleFrom="sm"
          />
        </Box>
        <Box className={css.boxCenter} p="md">
          Header
        </Box>
        <Box className={css.boxEnd}>
          <Burger opened={asideOpened} size="lg" m="xs" onClick={toggleAside} />
        </Box>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        Navbar
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="md" animate={true} />
          ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <Container fluid p="xl">
          {Array(40)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} h={56} mb="md" animate={true} />
            ))}
        </Container>
      </AppShell.Main>
      <AppShell.Aside p="md">
        Aside
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="md" animate={true} />
          ))}
      </AppShell.Aside>
      <AppShell.Footer p="md">Footer</AppShell.Footer>
    </AppShell>
  )
}

export default App
