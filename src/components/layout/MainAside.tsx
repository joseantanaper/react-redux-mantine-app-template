import React from "react"
import MainSkeleton from "./MainSkeleton"
import MainMenu from "./MainMenu"

const MainAside = () => {
  return (
    <>
      <MainMenu title="Aside" />
      <MainSkeleton count={5} />
    </>
  )
}

export default MainAside
