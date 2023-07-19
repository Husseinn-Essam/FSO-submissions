import React, { useState, useEffect } from "react";
import axios from "axios";

const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};

const useCountry = (newSearch) => {
  const [country, setCountry] = useState(null);

  const url = `https://restcountries.com/v3.1/name/${newSearch}`;
  useEffect(() => {
    if (newSearch) {
      console.log(newSearch);
      axios
        .get(url)
        .then((res) => {
          setCountry(res.data);
        })
        .catch((e) => console.log(e));
    }
  }, [url]);
  console.log(country);
  return country;
};

const Country = ({ country }) => {
  console.log(country);
  if (!country) {
    return null;
  }

  if (!country) {
    return <div>not found...</div>;
  }

  return (
    <div>
      <h3>{country.name.common} </h3>
      <div>capital {country.capital} </div>
      <div>population {country.population}</div>
      <img
        src={country.flag}
        height="100"
        alt={`flag of ${country.name.common}`}
      />
    </div>
  );
};

const App = () => {
  const nameInput = useField("text");
  const [newSearch, setName] = useState("");
  const country = useCountry(newSearch);

  const fetch = (e) => {
    e.preventDefault();
    setName(nameInput.value);
  };

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>
      {console.log(country)}
      <Country country={country[0]} />
    </div>
  );
};

export default App;
