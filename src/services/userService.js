import api from "../api/axiosConfig";

export const register = async (
  username,
  fullName,
  password,
  phoneNumber,
  role
) => {
  try {
    const response = await api.post("/api/user/create", {
      username,
      fullName,
      password,
      phoneNumber,
      role,
    });

    if (response.data) {
      return response.data;
    } else {
      throw new Error("rgistration failed");
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error during registration");
  }
};
