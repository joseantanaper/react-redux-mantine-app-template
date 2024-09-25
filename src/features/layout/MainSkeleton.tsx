import React from "react"
import { Skeleton } from "@mantine/core"

const MainSkeleton = ({ count = 10, size = 48 }) =>
  Array(count)
    .fill(0)
    .map((_, index) => <Skeleton key={index} h={size} mt="md" animate={true} />)

export default MainSkeleton