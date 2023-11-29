import api from "../api/axiosConfig";

export const allPatients = async () => {
  try {
    const response = await api.get("/api/patients");

    if (response.data) {
      return response.data;
    } else {
      throw new Error("patients not found");
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error getting patient");
  }
};
