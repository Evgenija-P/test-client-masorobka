import axios from "axios";
import { baseServerURL } from "../config/url";

export const getProducts = async () => {
  try {
    const result = await axios.get(`${baseServerURL}product`);
    // if (result.status === 200) return result;
    return result;
  } catch (error) {
    return { error: error.message };
  }
};

export const createProduct = async (product) => {
  try {
    const result = await axios.post(`${baseServerURL}product`, product, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return result;
  } catch (err) {
    console.log("ERR: ", err);
    console.log("MSG: ", err.message);
  }
};

// export const updateProduct = async (product) => {
export const updateProduct = async (id, product) => {
  // try {
  const result = await axios.put(
    `${baseServerURL}product/${id}`,
    {
      ...product,
    },
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
  // const result = await axios.put(`${baseServerURL}product/${id}`, formData, {
  //   headers: { "Content-Type": "multipart/form-data" },
  // });
  return result;
  // } catch (error) {
  // return { error: error.message }
  // }
};

export const deleteProduct = async (product) => {
  try {
    const result = await axios.delete(`${baseServerURL}product/${product._id}`);
    return result;
  } catch (error) {
    return { error: error.message };
  }
};
