import axios from "axios";
const baseURL = "/api/persons";
const getPersons = () => {
  const request = axios.get(baseURL);
  return request.then((response) => response.data);
};
const postPerson = (newPersonObj) => {
  const request = axios.post(baseURL, newPersonObj);
  return request.then((response) => {
    return response.data;
  });
};
const deleteReq = (id) => {
  const request = axios.delete(`${baseURL}/${id}`);
  return request;
};
const updateNumReq = (id, toBeChanged) => {
  const request = axios.put(`${baseURL}/${id}`, toBeChanged);
  return request.then((response) => {
    return response.data;
  });
};
export default { getPersons, postPerson, deleteReq, updateNumReq };
