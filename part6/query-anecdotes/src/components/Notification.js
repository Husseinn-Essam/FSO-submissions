import NotifContext from "./NotifContext";
import { useContext } from "react";
const Notification = () => {
  const [message, messageDispatch] = useContext(NotifContext);
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
  };

  if (message === "") return null;

  return <div style={style}>{message}</div>;
};

export default Notification;
