import { useDispatch } from "react-redux";
import { createAncedote } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const addAncedote = (e) => {
    e.preventDefault();
    const content = e.target.ancedote.value;
    dispatch(createAncedote(content));
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
