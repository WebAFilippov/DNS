import { createSlice } from "@reduxjs/toolkit"

import { RootState } from "@/app/store/appStore"

type InitialState = {
  open: boolean
}

const initialState: InitialState = {
  open: true,
}

const announcement = createSlice({
  name: "announcement",
  initialState,
  reducers: {
    closeAnnouncement: (state) => {
      state.open = !state.open
    },
  },
})

export const AnnouncementState = (state: RootState) => state.announcement.open

export const { closeAnnouncement } = announcement.actions
export const announcementSlice = announcement.reducer
