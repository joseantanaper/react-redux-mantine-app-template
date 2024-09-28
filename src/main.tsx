import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./components/layout/App"
import { store } from "./app/store"
import { MantineProvider } from "@mantine/core"
import theme from "./theme/theme"

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <App />
        </MantineProvider>
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
