import React from "react"
import { Container, Grid, Group, Pagination } from "@mantine/core"

const MainFooter = () => {
  return (
    <Group wrap="nowrap">
      <Group miw={300} wrap="nowrap">
        Left Area
      </Group>
      <Group justify="center" w="100%">
        <Pagination.Root total={100}>
          <Group gap={5} justify="center" wrap="nowrap">
            <Pagination.First />
            <Pagination.Previous />
            <Pagination.Items />
            <Pagination.Next />
            <Pagination.Last />
          </Group>
        </Pagination.Root>
      </Group>
      <Group miw={300} justify="flex-end" wrap="nowrap">
        Right Area
      </Group>
    </Group>
  )
}

export default MainFooter
