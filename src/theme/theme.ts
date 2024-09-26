import {
  createTheme,
  AppShellNavbar,
  AppShellHeader,
  AppShell,
  AppShellMain,
  AppShellAside,
  AppShellFooter,
  ModalBaseCloseButton,
  Drawer,
  CloseButton,
  Burger,
  Badge,
} from "@mantine/core"
import { MantineRadiusValues } from "@mantine/core"

const theme = createTheme({
  /** Put your mantine theme override here */
  fontFamily: "'Segoe UI Light', Open Sans, sans-serif",
  primaryColor: "red",
  white: "#eee",

  // focusRing: "always",
  fontSmoothing: true,
  cursorType: "pointer",

  defaultRadius: 2,

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
        p: "md",
      },
    }),
    AppShellAside: AppShellAside.extend({
      defaultProps: {
        p: "md",
      },
    }),
    AppShellMain: AppShellMain.extend({
      defaultProps: {},
    }),
    Drawer: Drawer.extend({
      defaultProps: {
        bg: "red",
        lockScroll: false,
        // offset: 8,
        radius: 2,
        position: "right",
        // padding: "xl",
        overlayProps: {
          backgroundOpacity: 0.6,
          blur: 4,
        },
      },
    }),
    CloseButton: CloseButton.extend({
      defaultProps: {
        size: "lg",
      },
    }),
    Burger: Burger.extend({
      defaultProps: {
        lineSize: 4,
        color: "red",
      },
    }),
    Badge: Badge.extend({
      defaultProps: {
        size: "md",
        color: "blue",
      },
    }),
  },
})

export default theme
