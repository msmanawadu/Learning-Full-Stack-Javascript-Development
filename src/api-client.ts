import axios from "axios";
import { API_SERVER_URL } from "./public-config";

export const fetchContestList = async () => {
  try {
    const response = await axios.get(
      `${API_SERVER_URL}/contests`,
    );
    return response.data.contests;
  } catch (error) {
    console.log(error);
  }
};

export const fetchContest = async (contestId) => {
  try {
    const response = await axios.get(
      `${API_SERVER_URL}/contest/${contestId}`,
    );
    return response.data.contest;
  } catch (error) {
    console.log(error);
  }
};
