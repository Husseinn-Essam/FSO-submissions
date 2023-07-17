import { createSlice } from "@reduxjs/toolkit";

const notifSlice = createSlice({
  name: "notif",
  initialState: "",
  reducers: {
    notifyVotes(state, action) {
      console.log(action);
      console.log(action.payload);
      return `You have voted for ${action.payload}`;
    },
    mute(state, action) {
      return "";
    },
    notifyCreation(state, action) {
      return `You have created  ${action.payload}`;
    },
  },
});

export const { notifyVotes, mute, notifyCreation } = notifSlice.actions;
export default notifSlice.reducer;
