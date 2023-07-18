import { createContext, useReducer } from "react";

const NotifReducer = (state, action) => {
  switch (action.type) {
    case "notify":
      return action.payload;
    case "mute":
      return "";
    default:
      return null;
  }
};

const NotifContext = createContext();

export const NotifContextProvider = (props) => {
  const [message, messageDispatch] = useReducer(NotifReducer, "");

  return (
    <NotifContext.Provider value={[message, messageDispatch]}>
      {props.children}
    </NotifContext.Provider>
  );
};

export default NotifContext;
