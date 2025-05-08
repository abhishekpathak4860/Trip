import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB/connect.js";
import router from "./Routes/dataRoute.js";
import cors from "cors";
import path from "path";

dotenv.config();

const port = 5000;
const server = express();
// DB Connection
connectDB();

const CorsOptions = {
  origin: ["https://trip-rose.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
server.use(cors(CorsOptions));
server.use(express.json());

server.use("/api/user", router);
server.get("/", (req, res) => {
  res.send("hello");
});
server.get("/get", (req, res) => {
  res.send("hello world");
});

export default server;
