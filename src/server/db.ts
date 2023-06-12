/* MongoDB database server connection client module for the Node-Express Web API.
- Utilizes MongoDB native driver for Node.js
*/

import { MongoClient } from "mongodb";
import { MONGODB_URI, DATABASE_NAME } from "./config";

// To re-use the database connection client
let connectedClient;

export const connectClient = async () => {
  if (connectedClient) {
    return connectedClient.db(DATABASE_NAME);
  }

  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  await client.db(DATABASE_NAME).command({ ping: 1 });
  console.info("Connected to MongoDB");

  connectedClient = client;

  return connectedClient.db(DATABASE_NAME);
};

export const stopClient = async () => {
  await connectedClient?.close();
};
