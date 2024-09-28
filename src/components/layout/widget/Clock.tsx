import React, { useState, useEffect } from "react"
import { useInterval } from "@mantine/hooks"
import { Box } from "@mantine/core"
import css from "./Clock.module.css"

const Clock = () => {
  const [seconds, setSeconds] = useState(0)
  const interval = useInterval(() => setSeconds(s => s + 1), 1000)

  useEffect(() => {
    interval.start()
    return interval.stop
  }, [])

  return (
    <Box
      className={css.clock}
    >{`${String(new Date().getHours()).padStart(2, "0")}:${String(new Date().getMinutes()).padStart(2, "0")}:${String(new Date().getSeconds()).padStart(2, "0")}`}</Box>
  )
}

export default Clock
