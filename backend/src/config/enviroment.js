import { config } from "dotenv";
config()

export const {
    PORT,
    DB_HOST,
    DB_DEV,
    ENVIROMENT
} = process.env;