// React module for Server-Side Rendering of App component in initial rendering

import ReactDOMServer from "react-dom/server";

import { fetchContestList, fetchContest } from "../api-client";
import App from "../components/app";

const serverRender = async (req) => {
  const { contestId } = req.params;

  // Get data from Web API in the initial rendering
  const initialData = contestId
    ? { currentContest: await fetchContest(contestId) }
    : { contests: await fetchContestList() };

  const initialMarkup = ReactDOMServer.renderToString(
    <App initialData={initialData} />,
  );
  return { initialMarkup, initialData };
};

export default serverRender;
