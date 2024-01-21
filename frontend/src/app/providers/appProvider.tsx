import { RouterProvider } from "react-router-dom"
import { Provider as ReduxProvider } from "react-redux"

import { router } from "./appRouter"
import { store } from "../store/appStore"

export const AppProvider = () => {
  return (
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  )
}
