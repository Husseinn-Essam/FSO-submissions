import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { notify } from "../reducers/notificationReducer";

import anecdotesServices from "../services/anecdotesServices";
const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const addAncedote = async (e) => {
    e.preventDefault();
    const content = e.target.ancedote.value;
    await anecdotesServices.addNew(content);
    dispatch(createAnecdote(content));
    dispatch(notify(`You have created  ${content}`, 5000));
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
