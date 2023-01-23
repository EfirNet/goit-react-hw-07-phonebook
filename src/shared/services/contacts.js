import axios from "axios";

const instance = axios.create({
  baseURL: "https://63caa4aa4f53a0042027c558.mockapi.io/contacts"
});

export const fetchContacts = async () => {
  const { data } = await instance.get("/");
  return data;
}

export const addContact = async (data) => {
  const { data: result } = await instance.post("/", data);
  return result;
}

export const deleteContact = async (id) => {
  const { data } = await instance.delete(`/${id}`);
  return data;
}
