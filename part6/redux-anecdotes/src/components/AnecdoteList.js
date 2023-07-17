import { useSelector, useDispatch } from "react-redux";
import { voteAncedote } from "../reducers/anecdoteReducer";
const Anecdote = ({ anecdote, vote }) => {
  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote.id)}>vote</button>
      </div>
    </div>
  );
};
const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state);
  return (
    <div>
      {anecdotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          vote={() => dispatch(voteAncedote(anecdote.id))}
        />
      ))}
    </div>
  );
};

export default AnecdoteList;
