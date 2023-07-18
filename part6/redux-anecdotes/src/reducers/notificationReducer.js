import { createSlice } from "@reduxjs/toolkit";

const notifSlice = createSlice({
  name: "notif",
  initialState: "",
  reducers: {
    notifyMessage(state, action) {
      return action.payload;
    },
    mute(state, action) {
      return "";
    },
  },
});

export const notify = (notif, time) => {
  return async (dispatch) => {
    dispatch(notifyMessage(notif));
    setTimeout(() => {
      dispatch(mute());
    }, time);
  };
};

export const { notifyMessage, mute } = notifSlice.actions;
export default notifSlice.reducer;
