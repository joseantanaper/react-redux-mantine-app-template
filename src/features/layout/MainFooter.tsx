import React from "react"
import { Grid, Group, Pagination } from "@mantine/core"

const MainFooter = () => {
  return (
    <>
      <Group miw={300}>Left Area</Group>
      <Group justify="center" w="100%">
        <Pagination.Root total={100}>
          <Group gap={5} justify="center">
            <Pagination.First />
            <Pagination.Previous />
            <Pagination.Items />
            <Pagination.Next />
            <Pagination.Last />
          </Group>
        </Pagination.Root>
      </Group>
      <Group miw={300} justify="flex-end">
        Right Area
      </Group>
    </>
  )
}

export default MainFooter
