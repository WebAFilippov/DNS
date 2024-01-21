import { configureStore } from "@reduxjs/toolkit"

import { config } from "@/shared/config"
import { announcementSlice } from "@/features/announcement"
import { sessionSlice } from "@/entities/session"
import { baseApi } from "../api/baseApi"

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    announcement: announcementSlice,
    session: sessionSlice,
  },
  devTools: config.DEV,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
