import axios from "axios";
import { baseServerURL } from "../config/url";

export const axiosToken = {
  set(token) {axios.defaults.headers.common.Authorization = `Bearer ${token}`},
  unset() {axios.defaults.headers.common.Authorization = ''},
};

        // Auth OPERATIONS

export const login = async (credentials) => {
  console.log({ ...credentials });
  const {data} = await axios.post(`${baseServerURL}auth/login`, { ...credentials});
  if (data.token) axiosToken.set(data.token);
  return data;
};

export const logout = async () => {
  const result = await axios.get(`${baseServerURL}auth/logout`);
  if (result.status === 200) axiosToken.unset();
  return result;
}

export const getCurrent = async (token) => {
  axiosToken.set(token);
  const result = await axios.get(`${baseServerURL}auth/getCurrent`);
  if (result.status === 200) axiosToken.set(result.data.token);
  return result.data.token;
}
