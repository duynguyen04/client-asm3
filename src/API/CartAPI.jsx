// import axiosClient from "./axiosClient";
import axiosClientAuth from "./axiosClientAuth";

const CartAPI = {
  getCarts: (query) => {
    const url = `/carts${query}`;
    return axiosClientAuth.get(url);
  },

  postAddToCart: (query) => {
    const url = `/carts/add${query}`;
    return axiosClientAuth.post(url);
  },

  deleteToCart: (query) => {
    const url = `/carts/delete${query}`;
    return axiosClientAuth.delete(url);
  },

  putToCart: (query) => {
    const url = `/carts/update${query}`;
    return axiosClientAuth.put(url);
  },
};

export default CartAPI;
