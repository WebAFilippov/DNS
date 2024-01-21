import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { RootState } from "@/app/store/appStore"
import { SessionState } from ".."

const initialState: SessionState = {
  userId: null,
  accessToken: null,
}

const session = createSlice({
  name: "session",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<SessionState>) => {
      state.userId = action.payload.userId
      state.accessToken = action.payload.accessToken
    },
    logout: (state) => {
      state.userId = null
      state.accessToken = null
    },
  },
})

export const sessionCurrentID = (state: RootState) => state.session.userId
export const sessionCurrentToken = (state: RootState) => state.session.accessToken

export const { setCredentials, logout } = session.actions
export const sessionSlice = session.reducer
