// import axiosClientAuth from './axiosClient';
import axiosClientAuth from "./axiosClientAuth";

const CommentAPI = {
  getCommentProduct: (query) => {
    const url = `/comment/${query}`;
    return axiosClientAuth.get(url);
  },

  postCommentProduct: (query) => {
    const url = `/comment/send${query}`;
    return axiosClientAuth.post(url);
  },
};

export default CommentAPI;
