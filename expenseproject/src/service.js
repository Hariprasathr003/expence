import axios from "axios";

const dataFetch = axios.create({
  baseURL: "http://localhost:4000/api/expence/",
  headers: { "Content-Type": "application/json" },
});

const getAll = () => {
  return dataFetch.get("");
};

const createData = (data) => {
  return dataFetch.post("", data);
};

const updateData = (id, data) => {
  return dataFetch.put(`${id}`, data);
};

const deleteData = (id, data) => {
  return dataFetch.delete(`${id}`, data);
};

export default {
  getAll,
  createData,
  updateData,
  deleteData,
};
