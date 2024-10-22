import apiService from "../../utils/apiService";

const authService = {
  login: (payload) =>
    apiService({ method: "POST", url: "user/login", id: null, data: payload }),
  register: (payload) =>
    apiService({
      method: "POST",
      url: "user/register",
      id: null,
      data: payload,
    }),
};

export default authService;
