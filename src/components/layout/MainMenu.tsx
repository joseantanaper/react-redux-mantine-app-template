import React from "react"
import {
  Badge,
  Box,
  Container,
  Divider,
  Group,
  NavLink,
  Stack,
  Title,
  UnstyledButton,
} from "@mantine/core"
import RouterNavLink from "../common/RouterNavLink"
import {
  IconActivity,
  IconChevronRight,
  IconCircleOff,
  IconGauge,
  IconHome,
  IconHome2,
  IconGridDots,
} from "@tabler/icons-react"

import css from "../../theme/theme.module.css"

const MainMenu = ({ title, justify = "flex-start" }: any) => {
  return (
    <Stack>
      <Container fluid w="100%" pos="relative" h={60} className={css.subheader}>
        {justify === "flex-end" ? (
          <Group justify={justify} w="100%">
            {title}
            <IconGridDots opacity={0.2} />
          </Group>
        ) : (
          <Group justify={justify} w="100%">
            <IconGridDots opacity={0.2} />
            {title}
          </Group>
        )}
      </Container>
      <Container
        fluid
        w="100%"
        m={0}
        pr={justify === "flex-start" ? 1 : undefined}
        pl={justify !== "flex-start" ? 1 : undefined}
      >
        <NavLink
          href="#required-for-focus"
          label="Main Routes"
          leftSection={<IconHome2 size="1rem" stroke={2} />}
        >
          <RouterNavLink
            to="/"
            label="Home"
            description="This is home"
            leftSection={<IconHome2 size="1rem" stroke={1} />}
          />
          <RouterNavLink
            to="/content"
            label="Content"
            description="More content here..."
            leftSection={<IconHome2 size="1rem" stroke={1} />}
          />
          <RouterNavLink
            to="/about"
            label="About"
            description="This is about section"
            leftSection={<IconHome2 size="1rem" stroke={1} />}
          />
        </NavLink>

        <Divider />
        <NavLink
          href="#required-for-focus"
          label="With icon"
          leftSection={<IconHome2 size="1rem" stroke={1.5} />}
        ></NavLink>
        <NavLink
          href="#required-for-focus"
          label="With right section"
          leftSection={<IconGauge size="1rem" stroke={1.5} />}
          rightSection={
            <IconChevronRight
              size="0.8rem"
              stroke={1.5}
              className="mantine-rotate-rtl"
            />
          }
        />
        <NavLink
          href="#required-for-focus"
          label="Disabled"
          leftSection={<IconCircleOff size="1rem" stroke={1.5} />}
          disabled
        />
        <NavLink
          href="#required-for-focus"
          label="With description"
          description="Additional information"
          leftSection={
            <Badge size="xs" color="red" circle>
              3
            </Badge>
          }
        />
        <NavLink
          href="#required-for-focus"
          label="Active subtle"
          leftSection={<IconActivity size="1rem" stroke={1.5} />}
          rightSection={
            <IconChevronRight
              size="0.8rem"
              stroke={1.5}
              className="mantine-rotate-rtl"
            />
          }
          variant="subtle"
          active
        />
        <NavLink
          href="#required-for-focus"
          label="Active light"
          leftSection={<IconActivity size="1rem" stroke={1.5} />}
          rightSection={
            <IconChevronRight
              size="0.8rem"
              stroke={1.5}
              className="mantine-rotate-rtl"
            />
          }
          active
        />
        <NavLink
          href="#required-for-focus"
          label="Active filled"
          leftSection={<IconActivity size="1rem" stroke={1.5} />}
          rightSection={
            <IconChevronRight
              size="0.8rem"
              stroke={1.5}
              className="mantine-rotate-rtl"
            />
          }
          variant="filled"
          active
        />
      </Container>
    </Stack>
  )
}

export default MainMenu
