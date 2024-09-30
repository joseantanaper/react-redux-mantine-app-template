import React from "react"
import MainSkeleton from "../../components/layout/MainSkeleton"

const Content = () => {
  return (
    <>
      About!
      <MainSkeleton count={40} />
    </>
  )
}

export default Content