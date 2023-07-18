import { useSelector, useDispatch } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { notify } from "../reducers/notificationReducer";
const Anecdote = ({ anecdote, vote, notify, mute }) => {
  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button
          onClick={() => {
            vote(anecdote.id);
            notify();
          }}
        >
          vote
        </button>
      </div>
    </div>
  );
};
const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector(({ anecdote, filter }) => {
    if (filter === "") {
      return anecdote;
    } else {
      return anecdote.filter((a) => {
        return a.content.toLowerCase().includes(filter.toLowerCase());
      });
    }
  });
  return (
    <div>
      {anecdotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          vote={() => dispatch(voteAnecdote(anecdote))}
          notify={() =>
            dispatch(notify(`You have voted for  ${anecdote.content}`, 5000))
          }
        />
      ))}
    </div>
  );
};

export default AnecdoteList;
