import express, { json } from "express";
import axios from "axios";
import redisClient from "./client.js";

const app = express();

app.get("/", async (_req, res) => {
  const cachedValues = await redisClient.get("todos");

  if (cachedValues) {
    return res.json(JSON.parse(cachedValues));
  }

  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos",
  );
  await redisClient.set("todos", JSON.stringify(data));
  await redisClient.expire("todos", 30);
  return res.json(data);
});

app.listen(9000, () => {
  console.log(`Server is up and running on Port 9000`);
});
