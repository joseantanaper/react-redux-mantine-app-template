import React, { useState, useEffect } from "react"
import { useInterval } from "@mantine/hooks"
import { Box, Text } from "@mantine/core"
import css from "./Clock.module.css"
import { useMantineTheme } from "@mantine/core"

const Clock = () => {
  const [tick, setTick] = useState(0)
  const interval = useInterval(() => setTick(s => s + 1), 500)
  const theme = useMantineTheme()

  useEffect(() => {
    interval.start()
    return interval.stop
  }, [])

  return (
    <Text
      className={css.clock}
      color={theme.primaryColor}
    >{`${String(new Date().getHours()).padStart(2, "0")}:${String(new Date().getMinutes()).padStart(2, "0")}:${String(new Date().getSeconds()).padStart(2, "0")}`}</Text>
  )
}

export default Clock
