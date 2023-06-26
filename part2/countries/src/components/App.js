import { useState, useEffect } from "react";
import SearchForm from "./SearchForm.js";
import services from "../services.js";
import Display from "./Display.js";
import Notification from "./Notification.js";
import axios from "axios";
import Country from "./Country.js";
const App = () => {
  const [newSearch, setNewSearch] = useState("");
  const [country, setCountry] = useState([]);
  const url = `https://restcountries.com/v3.1/name/${newSearch}`;
  useEffect(() => {
    if (newSearch) {
      axios
        .get(url)
        .then((res) => {
          setCountry(res.data);
        })
        .catch(() => console.log("not Found"));
    }
  }, [url]);

  const handleChange = (func) => {
    return (e) => func(e.target.value);
  };

  const handleShow = (country) => {
    setCountry([country]);
  };

  return (
    <div>
      <h1>Countries</h1>
      {/* <Notification succMessage={succMsg} errMessage={errMsg} /> */}
      <SearchForm
        newSearch={newSearch}
        setNewSearch={setNewSearch}
        handleChange={handleChange}
      />
      <Display country={country} handleShow={handleShow} />
    </div>
  );
};

export default App;
