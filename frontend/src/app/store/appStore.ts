import { configureStore } from "@reduxjs/toolkit"
import { config } from "@/shared/config"
import { sessionSlice } from "@/entities/session"
import { baseApi } from "../api/baseApi"
import { authModalSlice } from "@/widgets/auth-modal"

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    session: sessionSlice,
    authModal: authModalSlice,
  },
  devTools: config.DEV,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
