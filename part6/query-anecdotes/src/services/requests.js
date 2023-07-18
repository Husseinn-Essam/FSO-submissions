import axios from "axios";
const baseUrl = "http://localhost:3001/anecdotes";
export const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const create = async (obj) => {
  const response = await axios.post(baseUrl, obj);
  return response.data;
};

export const update = async (obj) => {
  const response = await axios.put(`${baseUrl}/${obj.id}`, obj);
  return response.data;
};
// eslint-disable-next-line import/no-anonymous-default-export
