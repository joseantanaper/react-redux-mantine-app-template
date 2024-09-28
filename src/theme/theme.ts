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

import css from "./theme.module.css"

const theme = createTheme({
  /** Put your mantine theme override here */
  fontFamily: "Lato, Montserrat, Open Sans, sans-serif",
  fontFamilyMonospace: "Roboto Mono",
  primaryColor: "pink",
  white: "#eee",

  activeClassName: css.active,

  focusRing: "auto",
  fontSmoothing: true,
  cursorType: "pointer",

  defaultRadius: 3,

  components: {
    AppShell: AppShell.extend({
      defaultProps: {
        withBorder: true,
      },
    }),
    AppShellHeader: AppShellHeader.extend({
      defaultProps: {
        px: "xs",
      },
    }),
    AppShellFooter: AppShellFooter.extend({
      defaultProps: {
        px: "xl",
      },
    }),
    AppShellNavbar: AppShellNavbar.extend({
      defaultProps: {
        className: css.navbar,
        p: "sm",
        pl: "md",
      },
    }),
    AppShellAside: AppShellAside.extend({
      defaultProps: {
        className: css.aside,
        p: "sm",
        pr: "md",
      },
    }),
    AppShellMain: AppShellMain.extend({
      defaultProps: {
        m: "md",
      },
    }),
    Drawer: Drawer.extend({
      defaultProps: {
        padding: "xl",
        lockScroll: false,
        // offset: 8,
        position: "right",
        overlayProps: {
          backgroundOpacity: 0.6,
          blur: 4,
        },
      },
    }),
    CloseButton: CloseButton.extend({
      defaultProps: {
        size: "xl",
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
        className: css.btn,
        // bg: "red",
        miw: 50,
        px: "xs",
        mih: 48,
        variant: "gradient",
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
