import axiosClient from "./axiosClient";
import axiosClientAuth from "./axiosClientAuth";

const ChatRoomsAPI = {
  getMessageByRoomId: (Id) => {
    const url = `/chat/${Id}`;
    return axiosClientAuth.get(url);
  },

  createNewRoom: () => {
    const url = `/chatrooms/createNewRoom`;
    return axiosClientAuth.post(url);
  },

  addMessage: (body) => {
    const url = `/chat`;
    return axiosClientAuth.post(url, body);
  },
};

export default ChatRoomsAPI;
