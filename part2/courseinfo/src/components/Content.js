import Part from "./Part";
const Content = ({ parts }) => (
  <div>
    <ul>
      {parts.map((part) => (
        <li key={part.id}>
          <Part part={part} />
        </li>
      ))}
    </ul>
  </div>
);

export default Content;
