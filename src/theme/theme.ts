import {
  createTheme,
  AppShellNavbar,
  AppShellHeader,
  AppShell,
  AppShellMain,
  AppShellAside,
  AppShellFooter,
  ModalBaseCloseButton,
} from "@mantine/core"
import { MantineRadiusValues } from "@mantine/core"

const theme = createTheme({
  /** Put your mantine theme override here */
  fontFamily: "'Fira Code', Open Sans, sans-serif",
  primaryColor: "pink",
  white: "pink",

  focusRing: "always",
  fontSmoothing: true,
  cursorType: "pointer",

  defaultRadius: 0,

  components: {
    AppShell: AppShell.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    AppShellHeader: AppShellHeader.extend({
      defaultProps: {
        px: "sm",
      },
    }),
    AppShellFooter: AppShellFooter.extend({
      defaultProps: {
        px: "sm",
      },
    }),
    AppShellNavbar: AppShellNavbar.extend({
      defaultProps: {
        p: "xl",
      },
    }),
    AppShellAside: AppShellAside.extend({
      defaultProps: {
        p: "xl",
      },
    }),
    AppShellMain: AppShellMain.extend({
      defaultProps: {},
    }),
  },
})

export default theme
