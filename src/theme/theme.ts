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
  Flex,
  Group,
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
  primaryColor: "bright-pink",
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
        zIndex: 1024,
      },
    }),
    AppShellFooter: AppShellFooter.extend({
      defaultProps: {
        className: css.footer,
        px: "xl",
        zIndex: 1024,
      },
    }),
    AppShellNavbar: AppShellNavbar.extend({
      defaultProps: {
        className: css.navbar,
        // px: "sm",
        zIndex: 2048,
      },
    }),
    AppShellAside: AppShellAside.extend({
      defaultProps: {
        className: css.aside,
        // p: "sm",
        // pr: "xl",
        zIndex: 2048,
      },
    }),
    AppShellMain: AppShellMain.extend({
      defaultProps: {
        className: css.main,
      },
    }),
    Drawer: Drawer.extend({
      defaultProps: {
        lockScroll: false,
        offset: 4,
        position: "right",
        radius: "md",
        zIndex: 2050,
        overlayProps: {
          backgroundOpacity: 0.4,
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
      },
    }),
    // ActionIcon: ActionIcon.extend({
    //   defaultProps: {
    //     color: "black",
    //     opacity: 1,
    //   },
    // }),
    Divider: Divider.extend({
      defaultProps: {
        m: "sm",
        size: "xs",
        opacity: 0.2,
      },
    }),
    Group: Group.extend({
      defaultProps: {
        wrap: "nowrap",
      },
    }),
    Flex: Flex.extend({
      defaultProps: {
        wrap: "nowrap",
        gap: "xs",
        align: "center",
      },
    }),
  },
})

export default theme
