import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotdev from "dotenv";

import postRoutes from "./routes/posts.js";

const app = express();
dotdev.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

mongoose.connect(process.env.DB_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
   app.listen(process.env.PORT, () => console.log("Server is running on port ", process.env.PORT));
})
.catch((error) => {
   console.log(error.message);
});
