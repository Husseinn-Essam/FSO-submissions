import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getAll, create, update } from "./services/requests";
import { useContext } from "react";
import NotifContext from "./components/NotifContext";
const App = () => {
  const [message, messageDispatch] = useContext(NotifContext);
  const queryClient = useQueryClient();

  const result = useQuery("anecdotes", getAll, {
    refetchOnWindowFocus: false,
  });

  const updateVotesMutation = useMutation(update, {
    onSuccess: () => {
      queryClient.invalidateQueries("anecdotes");
    },
  });

  const handleVote = (anecdote) => {
    console.log("vote");
    updateVotesMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 });

    messageDispatch({
      type: "notify",
      payload: `You have voted for ${anecdote.content}`,
    });
    setTimeout(() => {
      messageDispatch({ type: "mute" });
    }, 5000);
  };
  if (result.isLoading) {
    return <div>loading data...</div>;
  }

  if (result.isError) {
    return <div>Anecdote service not available due to problems in server</div>;
  }

  const anecdotes = result.data;

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
