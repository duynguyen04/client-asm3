import axiosClient from "./axiosClient";
import axiosClientAuth from "./axiosClientAuth";
const CheckoutAPI = {
  postEmail: (query) => {
    const url = `/email${query}`;
    return axiosClientAuth.post(url);
  },
  postOrder: (data) => {
    return axiosClientAuth.post("/checkout", data);
  },
};

export default CheckoutAPI;
