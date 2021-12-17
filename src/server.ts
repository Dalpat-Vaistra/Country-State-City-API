import app from "./app";
import * as dotenv from "dotenv";
import connect from "./config/connectDB";
import { notFoundHandler } from "./middlewares";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string);

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to The World API");
});

// Database connection

/**
 * Server Activation
 */
app.use(notFoundHandler);

app.listen(PORT, async () => {
  await connect();
  console.log(`Listing on port ${PORT}`);
});
