import { createSlice } from "@reduxjs/toolkit";
import anecdotesServices from "../services/anecdotesServices";
const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const anecdotesSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    vote(state, action) {
      const id = action.payload;
      const selected = state.find((a) => a.id === id);
      if (selected) {
        const updatedAnecdote = {
          ...selected,
          votes: selected.votes + 1,
        };
        return state
          .map((item) => (item.id === id ? updatedAnecdote : item))
          .sort((a, b) => b.votes - a.votes);
      }
    },

    append(state, action) {
      state.push(action.payload);
    },
    set(state, action) {
      return action.payload;
    },
  },
});

export const initiializeApp = () => {
  return async (dispatch) => {
    const anecdotes = await anecdotesServices.getAll();
    dispatch(set(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdotesServices.addNew(content);
    dispatch(append(newAnecdote));
  };
};

export const voteAnecdote = (obj) => {
  return async (dispatch) => {
    const updated = {
      ...obj,
      votes: obj.votes + 1,
    };
    await anecdotesServices.update(updated);
    dispatch(vote(obj.id));
  };
};
export const { vote, create, append, set } = anecdotesSlice.actions;
export default anecdotesSlice.reducer;
