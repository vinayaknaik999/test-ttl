import dotenv from "dotenv";
dotenv.config();
import { handler } from "./build/handler.js";
import express from "express";
const port = process.env.PORT;
import path from 'path';
const __dirname = path.resolve();

const app = express();

app.use(express.static(path.join(__dirname, "public")));


app.get("/healthcheck", (req, res) => {
  res.end("ok");
});


app.use(handler);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
