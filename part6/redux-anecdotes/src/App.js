import { useEffect } from "react";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import anecdotesServices from "./services/anecdotesServices";
import { useDispatch } from "react-redux";
import { set } from "./reducers/anecdoteReducer";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    anecdotesServices.getAll().then((a) => dispatch(set(a)));
  }, [dispatch]);
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
