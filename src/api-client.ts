/*  Web API client module for sending HTTP API requests/calls to Node-Express Web API. 
- Utilizes axios HTTP library
*/

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

export const addNewNameToContest = async ({
  contestId,
  newNameValue,
}) => {
  try {
    const response = await axios.post(
      `${API_SERVER_URL}/contest/${contestId}`,
      { newNameValue },
    );
    return response.data.updatedContest;
  } catch (error) {
    console.log(error);
  }
};
