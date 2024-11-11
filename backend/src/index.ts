import { app } from "./app";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
