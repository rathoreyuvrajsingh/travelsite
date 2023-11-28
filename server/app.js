import express from "express";
import colors from "colors";
import connectDB from "./Connection/db.js";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import auth from "./Routes/auth.js";


const app = express();
dotenv.config();

const PORT = process.env.PORT || 8080;


connectDB();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/", auth);

app.use("/register", cors());
app.use("/login", cors());
app.use("/contact",cors());





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgCyan.white);
});
