import { useMutation, useQuery, useQueryClient } from "react-query";
import { getAll, create, update } from "../services/requests";

const AnecdoteForm = () => {
  const queryClient = useQueryClient();
  const newMutation = useMutation(create, {
    onSuccess: (newAnecdote) => {
      const notes = queryClient.getQueryData("anecdotes");
      queryClient.setQueryData("anecdotes", notes.concat(newAnecdote));
    },
  });

  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    newMutation.mutate({ content, votes: 0 });
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
