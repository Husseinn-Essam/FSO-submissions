const Total = ({ parts }) => (
  <p>Number of exercises: {parts.reduce((a, b) => a + b.exercises, 0)}</p>
);
export default Total;
