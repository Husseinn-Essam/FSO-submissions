import Country from "./Country";
const Display = ({ country, handleShow }) => {
  if (country.length > 10) {
    return <div>Too many matches. Please provide a more specific search.</div>;
  } else if (country.length > 1) {
    return (
      <div>
        {country.map((c) => {
          return (
            <>
              <div key={c.name.common}>
                {c.name.common}
                <button onClick={() => handleShow(c)}>Show</button>
              </div>
            </>
          );
        })}
      </div>
    );
  } else if (country.length === 1) {
    return <Country country={country[0]} />;
  } else {
    return null; // No matches found
  }
};

export default Display;
