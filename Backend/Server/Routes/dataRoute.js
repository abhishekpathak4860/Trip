import express from "express";
import { data } from "../Controllers/userInput.js";

const router = express.Router();

router.post("/send", data);

export default router;
