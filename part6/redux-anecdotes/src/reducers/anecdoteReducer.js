import { createSlice } from "@reduxjs/toolkit";
import anecdotesServices from "../services/anecdotesServices";

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
