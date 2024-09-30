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
  getThemeColor,
  Divider,
} from "@mantine/core"
import { MantineRadiusValues, useMantineTheme } from "@mantine/core"
import { IconThermometer } from "@tabler/icons-react"

import css from "./theme.module.css"

const theme = createTheme({
  colors: {
    "bright-pink": [
      "#F0BBDD",
      "#ED9BCF",
      "#EC7CC3",
      "#ED5DB8",
      "#F13EAF",
      "#F71FA7",
      "#FF00A1",
      "#E00890",
      "#C50E82",
      "#AD1374",
    ],
  },

  /** Put your mantine theme override here */
  fontFamily: "Lato, Montserrat, Open Sans, sans-serif",
  fontFamilyMonospace: "Roboto Mono",
  primaryColor: "green",
  // white: "#eee",

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
        className: css.header,
        px: "xs",
      },
    }),
    AppShellFooter: AppShellFooter.extend({
      defaultProps: {
        className: css.footer,
        px: "xl",
      },
    }),
    AppShellNavbar: AppShellNavbar.extend({
      defaultProps: {
        className: css.navbar,
        p: "sm",
        // pl: "xl",
      },
    }),
    AppShellAside: AppShellAside.extend({
      defaultProps: {
        className: css.aside,
        p: "sm",
        // pr: "xl",
      },
    }),
    AppShellMain: AppShellMain.extend({
      defaultProps: {
        className: css.main,
      },
    }),
    Drawer: Drawer.extend({
      defaultProps: {
        padding: "sm",
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
        p: 0,
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
        p: 0,
        mih: 48,
        variant: "subtle",
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
    Divider: Divider.extend({
      defaultProps: {
        m: "md",
        opacity: 0.6,
      },
    }),
  },
})

export default theme
