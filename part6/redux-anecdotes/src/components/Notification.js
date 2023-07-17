import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector((state) => state.notif);

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };

  return notification === "" ? (
    <div></div>
  ) : (
    <div style={style}>{notification}</div>
  );
};

export default Notification;
