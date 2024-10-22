import apiService from "../../utils/apiService";

const userService = {
  customer: () => apiService({ method: "GET", url: "user/all-user" }),
};

export default userService;
