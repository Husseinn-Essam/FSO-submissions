import { useSelector, useDispatch } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import { notifyVotes, mute } from "../reducers/notificationReducer";
const Anecdote = ({ anecdote, vote, notify, mute }) => {
  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button
          onClick={() => {
            vote(anecdote.id);

            notify(anecdote);
            setTimeout(() => {
              mute();
            }, 5000);
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
          vote={() => dispatch(vote(anecdote.id))}
          notify={() => dispatch(notifyVotes(anecdote.content))}
          mute={() => dispatch(mute())}
        />
      ))}
    </div>
  );
};

export default AnecdoteList;
