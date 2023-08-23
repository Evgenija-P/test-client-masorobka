import axios from "axios";
import { baseServerURL } from "../config/url";

export const getOrders = async () => {
  try {
    const result = await axios.get(`${baseServerURL}order`);
    return result;
  } catch (error) {
    return { error: error.message };
  }
};

export const placeOrder = async (order) => {
  // console.log("Placing order:", order);
  try {
    const result = await axios.post(`${baseServerURL}order`, order);
    return result;
  } catch (err) {
    // return { error: error.message };
    // console.log(err);
    throw new Error(err.message);
  }
};

export const updateOrder = async (order) => {
  try {
    const result = await axios.put(`${baseServerURL}order/${order._id}`, {
      ...order,
    });
    return result;
  } catch (error) {
    return { error: error.message };
  }
};

export const deleteOrder = async (order) => {
  try {
    const result = await axios.delete(`${baseServerURL}order/${order._id}`);
    return result;
  } catch (error) {
    return { error: error.message };
  }
};
