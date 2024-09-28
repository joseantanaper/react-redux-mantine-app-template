import React from "react"
import { Container, Grid, Divider, Group, Pagination } from "@mantine/core"

const MainFooter = () => {
  return (
    <>
      <Group miw={200} wrap="nowrap">
        Left Area
      </Group>
      <Divider orientation="vertical" m="xs" size="xs" />
      <Group justify="center" w="100%">
        <Pagination total={100} gap={2} withEdges>
          <Group gap={2} justify="center" wrap="nowrap">
            <Pagination.First p="lg" />
            <Pagination.Previous p="md" />
            <Pagination.Items />
            <Pagination.Next p="lg" />
            <Pagination.Last p="lg" />
          </Group>
        </Pagination>
      </Group>
      <Divider orientation="vertical" m="xs" size="xs" />
      <Group miw={200} justify="flex-end" wrap="nowrap">
        Right Area
      </Group>
    </>
  )
}

export default MainFooter
