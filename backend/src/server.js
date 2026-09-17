import app from "./app.js";
import { connectDb } from "./config/database.js";
import { PORT } from "./config/env.js";

const startSever = async () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  await connectDb();
};

startSever();
