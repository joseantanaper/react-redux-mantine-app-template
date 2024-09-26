import React from "react"
import { Skeleton, Title } from "@mantine/core"
import MainSkeleton from "./MainSkeleton"

const MainNavbar = () => {
  return (
    <>
      <Title order={4}>Navigation</Title>
      <MainSkeleton />
    </>
  )
}

export default MainNavbar
