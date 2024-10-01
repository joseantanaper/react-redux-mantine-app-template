import React from "react"
import { Divider, Skeleton, Title } from "@mantine/core"
import MainSkeleton from "./MainSkeleton"
import MainMenu from "./MainMenu"

const MainNavbar = () => {
  return (
    <>
      <MainMenu title="Navigation" />
      {/* <MainSkeleton count={5} /> */}
    </>
  )
}

export default MainNavbar
