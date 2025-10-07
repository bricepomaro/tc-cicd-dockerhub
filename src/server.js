// src/server.js
import express from "express";
import { hello } from "./index.js";
const app = express();
app.get("/", (_req, res) => res.json({ msg: hello() }));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on :${port}`));