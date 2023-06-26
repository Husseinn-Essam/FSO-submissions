import axios from "axios";
import { useEffect, useState } from "react";

const Country = ({ country }) => {
  const flagUrl = country.flags.png;
  const api_key = process.env.REACT_APP_API_KEY;
  const [temp, setTemp] = useState("");
  const [icon, setIcon] = useState("");
  const [wind, setWind] = useState("");
  const weatherURL = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${country.name.common}`;

  useEffect(() => {
    axios.get(weatherURL).then((res) => {
      setTemp(res.data.current.feelslike_c);
      setWind(res.data.current.wind_kph);
      setIcon(res.data.current.condition.icon);
    });
  }, []);
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital : {country.capital}</p>
      <p>Area : {country.area}</p>
      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={flagUrl} alt="Country Flag" style={{ maxWidth: "200px" }} />
      <h3>Countrys Weather</h3>
      <p>Temp: {temp} C</p>
      <p>wind: {wind} Kph</p>
      <img src={icon} alt="Country Flag" style={{ maxWidth: "200px" }} />
    </div>
  );
};

export default Country;
