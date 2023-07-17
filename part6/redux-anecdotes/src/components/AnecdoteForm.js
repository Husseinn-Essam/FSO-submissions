import { useDispatch } from "react-redux";
import { create } from "../reducers/anecdoteReducer";
import { mute, notifyCreation } from "../reducers/notificationReducer";
const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const addAncedote = (e) => {
    e.preventDefault();
    const content = e.target.ancedote.value;
    dispatch(create(content));
    dispatch(notifyCreation(content));
    setTimeout(() => {
      dispatch(mute());
    }, 5000);
  };
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAncedote}>
        <div>
          <input name="ancedote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
