import api from "../api/axiosConfig";

export const register = async (formData) => {
  try {
    const response = await api.post("/api/user/create", formData);

    if (response.data) {
      console.log(response.data);
      return response.data;
    } else {
      throw new Error("rgistration failed");
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error during registration");
  }
};
