import axios from "axios";
const getCountries = (name) => {
  const request = axios.get(
    `https://studies.cs.helsinki.fi/restcountries/api/name/${name}`
  );
  return request.then((response) => response.data);
};
const postPerson = (newPersonObj) => {
  const request = axios.post("http://localhost:3001/persons", newPersonObj);
  return request.then((response) => {
    return response.data;
  });
};
const deleteReq = (id) => {
  const request = axios.delete(`http://localhost:3001/persons/${id}`);
  return request;
};
const updateNumReq = (id, toBeChanged) => {
  const request = axios.put(`http://localhost:3001/persons/${id}`, toBeChanged);
  return request.then((response) => {
    return response.data;
  });
};
export default { getCountries, postPerson, deleteReq, updateNumReq };
