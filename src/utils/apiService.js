import axios from "axios";
import { base_url } from "./base_url";
import { headerConfig } from "./headerConfig";

const apiService = async ({ method, url, id = "", data = null }) => {
  try {
    const fullUrl = id ? `${base_url}${url}/${id}` : `${base_url}${url}`;
    const config = {
      method,
      url: fullUrl,
      headers: headerConfig.headers || {},
      data,
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    // Enhanced error structure
    throw {
      message:
        error.response?.data?.message ||
        error.message ||
        "An unexpected error occurred.",
      status: error.response?.status || 500,
    };
  }
};

export default apiService;
