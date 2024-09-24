import {
  createTheme,
  AppShellNavbar,
  AppShellHeader,
  AppShell,
  AppShellMain,
} from "@mantine/core"
const theme = createTheme({
  /** Put your mantine theme override here */
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "pink",
  white: "pink",

  focusRing: "always",
  fontSmoothing: true,
  cursorType: "pointer",

  components: {
    AppShell: AppShell.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    AppShellHeader: AppShellHeader.extend({
      defaultProps: {
        // withBorder: false,
      },
    }),
    AppShellNavbar: AppShellNavbar.extend({
      defaultProps: {
        // withBorder: false,
      },
    }),
    AppShellMain: AppShellMain.extend({
      defaultProps: {
        // bg: "pink",
      },
    }),
  },
})

export default theme
