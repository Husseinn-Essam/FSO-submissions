import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const RateButton = ({ handleClick, buttonName }) => {
  return <button onClick={handleClick}>{buttonName}</button>;
};

const StatLine = ({ stat, statName }) => {
  return (
    <tr>
      <td>{statName}</td>
      <td>{stat}</td>
    </tr>
  );
};

const Stats = ({ good, neutral, bad, total }) => {
  if (total == 0) {
    return (
      <div>
        <p>No Feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Stats</h1>
      <table>
        <tbody>
          <StatLine stat={good} statName={"Good"} />
          <StatLine stat={neutral} statName={"neutral"} />
          <StatLine stat={bad} statName={"bad"} />
          <StatLine stat={total} statName={"total"} />
          <StatLine
            stat={total == 0 ? 0 : (good - bad) / total}
            statName={"Average score"}
          />
          <StatLine
            stat={total == 0 ? 0 : (good / total) * 100}
            statName={"Postive Feedback percentage "}
          />
        </tbody>
      </table>
    </div>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const handleGood = () => {
    const newGood = good + 1;
    setGood(newGood);
    setTotal(newGood + bad + neutral);
  };
  const handleNeutral = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
    setTotal(good + newNeutral + bad);
  };
  const handleBad = () => {
    const newBad = bad + 1;
    setBad(newBad);
    setTotal(good + neutral + newBad);
  };
  return (
    <>
      <div>
        <h1>Give Feedback</h1>
        <RateButton handleClick={handleGood} buttonName={"Good"} />
        <RateButton handleClick={handleNeutral} buttonName={"Neutral"} />
        <RateButton handleClick={handleBad} buttonName={"Bad"} />
      </div>
      <Stats good={good} neutral={neutral} bad={bad} total={total} />
    </>
  );
}

export default App;
