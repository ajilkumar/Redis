import redisClient from "./client.js";

async function init() {
  //   await redisClient.set("message:4", "Hello from Node JS");

  await redisClient.expire("message:4", 5);
  const result = await redisClient.get("message:4");
  console.log(`Result -->`, result);
}

init();
