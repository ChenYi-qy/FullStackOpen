import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const MostVotesDisplay = ({ anecdotes, point }) => {
    let max = Math.max(...point);
    let maxVoteIndex = point.indexOf(Math.max(...point));
    if (max === 0) return <div>No votes for any anecdotes yet!</div>;
    else
      return (
        <div>
          <p>{anecdotes[maxVoteIndex]}</p>
          <p>{point[maxVoteIndex]}</p>
        </div>
      );
  };

  const [selected, setSelected] = useState(0);
  const [point, setPoint] = useState(Array(7).fill(0));
  console.log(point);
  const maxVoteIndex = point.indexOf(Math.max(...point));

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]} has {point[selected]} votes
      </div>
      <div>
        <button
          onClick={() => {
            const copy = [...point];
            copy[selected] += 1;
            setPoint(copy);
          }}
        >
          vote
        </button>

        <button
          onClick={() => {
            console.log(Math.floor(Math.random() * 6));
            setSelected(Math.floor(Math.random() * 6));
          }}
        >
          next anecdote
        </button>
      </div>

      <h1> Anecdote with most votes </h1>
      <MostVotesDisplay anecdotes={anecdotes} point={point} />
    </div>
  );
};

export default App;
