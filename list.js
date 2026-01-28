import redisClient from "./client.js";

async function init() {
  await redisClient.lpush("messages", 1);
  await redisClient.lpush("messages", 2);
  await redisClient.lpush("messages", 3);
  await redisClient.lpush("messages", 4);
  const result = await redisClient.rpop("messages");
  console.log(`Result -->`, result);
}
init();
