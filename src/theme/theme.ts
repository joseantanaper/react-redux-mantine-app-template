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
  Button,
  ActionIcon,
  CheckIcon,
  CheckIconProps,
  Avatar,
  ThemeIcon,
} from "@mantine/core"
import { MantineRadiusValues } from "@mantine/core"
import { IconThermometer } from "@tabler/icons-react"

const theme = createTheme({
  /** Put your mantine theme override here */
  fontFamily: "'Segoe UI Light', Open Sans, sans-serif",
  primaryColor: "blue",
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
        px: 4,
      },
    }),
    AppShellFooter: AppShellFooter.extend({
      defaultProps: {
        px: "xs",
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
    Drawer: Drawer.extend({
      defaultProps: {
        padding: "xl",
        bg: "red",
        lockScroll: false,
        // offset: 8,
        radius: 2,
        position: "right",
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
        size: "xs",
        color: "blue",
      },
    }),
    Button: Button.extend({
      defaultProps: {
        // bg: "red",
        miw: 50,
        px: "xs",
        mih: 48,
        variant: "gradient",
        radius: "md",
      },
    }),
    Avatar: Avatar.extend({
      defaultProps: {
        size: "md",
        mx: "lg",
      },
    }),
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        color: "black",
        opacity: 1,
      },
    }),
  },
})

export default theme
