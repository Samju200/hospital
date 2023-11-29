import api from "../api/axiosConfig";

export const login = async (username, password) => {
  try {
    const response = await api.post("/api/user/login", {
      username,
      password,
    });

    if (response.data) {
      console.log(response.data);
      return response.data;
    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error during login");
  }
};
