import { useMutation, useQuery, useQueryClient } from "react-query";
import { getAll, create, update } from "../services/requests";
import { useContext } from "react";
import NotifContext from "../components/NotifContext";

const AnecdoteForm = () => {
  const queryClient = useQueryClient();
  const newMutation = useMutation(create, {
    onSuccess: (newAnecdote) => {
      const notes = queryClient.getQueryData("anecdotes");
      queryClient.setQueryData("anecdotes", notes.concat(newAnecdote));
    },
    onError: () => {
      messageDispatch({
        type: "notify",
        payload: `Too short anecdote should be 5 letters or more`,
      });
      setTimeout(() => {
        messageDispatch({ type: "mute" });
      }, 5000);
    },
  });
  const [message, messageDispatch] = useContext(NotifContext);
  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    newMutation.mutate({ content, votes: 0 });

    messageDispatch({ type: "notify", payload: `You have created ${content}` });
    setTimeout(() => {
      messageDispatch({ type: "mute" });
    }, 5000);
    event.target.anecdote.value = "";
    console.log("new anecdote");
  };

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
