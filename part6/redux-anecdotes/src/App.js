import { useSelector, useDispatch } from "react-redux";
import { voteAncedote, createAncedote } from "./reducers/anecdoteReducer";
const App = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const vote = (id) => {
    console.log("vote", id);
    dispatch(voteAncedote(id));
  };
  const addAncedote = (e) => {
    e.preventDefault();
    console.log(e.target);
    const content = e.target.ancedote.value;
    dispatch(createAncedote(content));
  };
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
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

export default App;
