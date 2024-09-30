import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store, persistor } from "./app/store"
import { MantineProvider } from "@mantine/core"
import { PersistGate } from "redux-persist/integration/react"
import theme from "./theme/theme"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./routes/root"
import About from "./routes/about"

const container = document.getElementById("root")

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          path: "/",
          element: <About />,
        },
        {
          index: true,
          path: "/about",
          element: <About />,
        },
      ],
    },
  ],
  { basename: window.location.pathname },
)

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={router} />
          </PersistGate>
        </MantineProvider>
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
