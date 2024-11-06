import express from "express";
import cors from "cors";
import { productRouter } from "./router/home";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/",productRouter);

app.listen(5001);