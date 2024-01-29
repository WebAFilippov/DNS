import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { InitialState } from "./types"

const initialState: InitialState = {
  open: false,
  action: "login",
}

const authModal = createSlice({
  name: "authModal",
  initialState,
  reducers: (create) => ({
    toggleModal: create.reducer((state) => {
      state.open = !state.open
    }),
    selectAction: create.reducer((state, action: PayloadAction<InitialState["action"]>) => {
      state.action = action.payload
    }),
  }),
  selectors: {
    isOpened: (state) => state.open,
    selectActions: (state) => state.action
  },
})

export const { toggleModal } = authModal.actions

export const { isOpened, selectActions } = authModal.selectors

export const authModalSlice = authModal.reducer
