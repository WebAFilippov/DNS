import { createBrowserRouter } from "react-router-dom"

import { AppLayout } from "./appLayout"
import { Home } from "@/pages/home/home"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
])
