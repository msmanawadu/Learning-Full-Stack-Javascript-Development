import axios from "axios";
import { API_SERVER_URL } from "./public-config";

export const fetchContests = async () => {
  try {
    const response = await axios.get(
      `${API_SERVER_URL}/contests`,
    );
    return response.data.contests;
  } catch (error) {
    console.log(error);
  }
};
