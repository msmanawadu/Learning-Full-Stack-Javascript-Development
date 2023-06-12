// Node-Express Web Server/API entry point

import express from "express";
import config from "./config";
import apiRouter from "./api-router";
import serverRender from "./render";

const server = express();

server.use(express.static("dist"));
server.set("view engine", "ejs");

// Node-Express Web API router middleware
server.use("/api", apiRouter);

server.get(["/", "/contest/:contestId"], async (req, res) => {
  // Server-Side Rendering of App component in initial rendering
  const { initialMarkup, initialData } = await serverRender(req);
  res.render("index", {
    initialMarkup,
    initialData,
  });
});

server.listen(config.PORT, config.HOST, () => {
  console.info(
    `Express server is listening at ${config.SERVER_URL}`,
  );
});
