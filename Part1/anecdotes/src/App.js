import { useState } from "react";

const Button = ({ handleClick, buttonName }) => {
  return <button onClick={handleClick}>{buttonName}</button>;
};

const MostVotes = ({ maxi, anecdotes, votes }) => {
  if (votes.every((e) => e === 0)) {
    return <div>You haven't voted yet</div>;
  }
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[maxi]}</div>
      <div>has {votes[maxi]} votes</div>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleVote = () => {
    const copy = [...votes];
    copy[selected]++;
    setVotes(copy);
  };

  const maxNumber = Math.max(...votes);
  const maxIndex = votes.indexOf(maxNumber);

  return (
    <>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <Button
        handleClick={() =>
          setSelected(Math.floor(Math.random() * anecdotes.length))
        }
        buttonName={"next anecdote"}
      />
      <Button handleClick={handleVote} buttonName={"vote"} />
      <MostVotes maxi={maxIndex} anecdotes={anecdotes} votes={votes} />
    </>
  );
};

export default App;
