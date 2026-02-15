import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "../.env") });
console.log("Environment variables loaded:", process.env.PORT, process.env.MONGO_URL);

export const ENV = {
    PORT: process.env.PORT,
    MONGO_URL: process.env.MONGO_URL
}
