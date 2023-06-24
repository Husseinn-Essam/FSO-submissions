import axios from "axios";
const getPersons = () => {
  const request = axios.get("http://localhost:3001/persons");
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
export default { getPersons, postPerson, deleteReq, updateNumReq };
