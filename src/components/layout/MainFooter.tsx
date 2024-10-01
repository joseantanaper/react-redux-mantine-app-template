import React from "react"
import { Container, Grid, Divider, Group, Pagination } from "@mantine/core"

const MainFooter = () => {
  return (
    <>
      <Group miw={200} wrap="nowrap" visibleFrom="md">
        Left Area
      </Group>
      <Divider orientation="vertical" visibleFrom="md" />
      <Group justify="center" w="100%" wrap="nowrap" radioGroup="xs">
        <Pagination.Root total={100} hiddenFrom="xs" siblings={0}>
          <Group gap={1} justify="center" wrap="nowrap">
            {/* <Pagination.First /> */}
            <Pagination.Previous />
            <Pagination.Items />
            <Pagination.Next />
            {/* <Pagination.Last /> */}
          </Group>
        </Pagination.Root>
        <Pagination.Root total={100} visibleFrom="xs">
          <Group gap={2} justify="center" wrap="nowrap">
            <Pagination.First visibleFrom="md" />
            <Pagination.Previous />
            <Pagination.Items />
            <Pagination.Next />
            <Pagination.Last visibleFrom="md" />
          </Group>
        </Pagination.Root>
      </Group>
      <Divider orientation="vertical" visibleFrom="md" />
      <Group miw={200} justify="flex-end" wrap="nowrap" visibleFrom="md">
        Right Area
      </Group>
    </>
  )
}

export default MainFooter
