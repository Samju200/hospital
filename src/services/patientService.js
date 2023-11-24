import api from "../api/axiosConfig";

export const patientByRegistrationNumber = async (registrationNumber) => {
  try {
    const response = await api.get(`/api/patient/${registrationNumber}`);

    if (response.data) {
      return response.data;
    } else {
      throw new Error("patient not found");
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error getting patient");
  }
};
