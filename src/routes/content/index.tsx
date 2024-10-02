import React from "react"
import MainSkeleton from "../../components/layout/MainSkeleton"
import { name, surname, loremIpsum } from "react-lorem-ipsum"
import { Table } from "@mantine/core"

const randomDate = (start: Date, end: Date) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  )
}

const elements = Array(24)
  .fill(0)
  .map((_, index) => ({
    id: index + 1,
    name: surname().concat(" ").concat(surname()).concat(", ").concat(name()),
    description: loremIpsum({ p: 1, random: true }),
    date: randomDate(new Date(2010, 0, 1), new Date()),
    value: Number(Math.random() * 999999),
  }))

const Content = () => {
  const rows = elements.map(element => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.id}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td
        miw={300}
        maw={500}
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {element.description}
      </Table.Td>
      <Table.Td align="right">{element.date.toLocaleString()}</Table.Td>
      <Table.Td align="right">
        {Number(element.value).toLocaleString("de-DE")}
      </Table.Td>
    </Table.Tr>
  ))

  return (
    <>
      <Table
        stickyHeader
        stickyHeaderOffset={120}
        highlightOnHover
        verticalSpacing={"md"}
        withTableBorder={false}
        withRowBorders={true}
        withColumnBorders={false}
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Id</Table.Th>
            <Table.Th>Name</Table.Th>
            <Table.Th>Description</Table.Th>
            <Table.Th style={{ textAlign: "right" }}>Date</Table.Th>
            <Table.Th style={{ textAlign: "right" }}>Value</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </>
  )
}

export default Content
