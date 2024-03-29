import bodyParser from "body-parser";
import express from "express";
 import cors from "cors";
import connectDB from "../config/database";
import auth from "./routes/api/auth";
import user from "./routes/api/user";
import profile from "./routes/api/profile";

const app = express();

// Connect to MongoDB
connectDB();
app.use(cors())
// Express configuration
app.set("port", process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./src/public'));
// @route   GET /
// @desc    Test Base API
// @access  Public
 

app.use("/api/auth", auth);
app.use("/api/user", user);
app.use("/api/profile", profile);
const port = app.get("port");
const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

export default server;
