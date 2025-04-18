import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./Config/mongodb.js";
import connectCloudinary from "./Config/cloudinary.js";
import adminRouter from "./Routes/adminRoute.js";

//app config
const app = express();
const PORT = process.env.PORT || 3000;
connectDB(); // connect to MongoDB
connectCloudinary(); // connect to Cloudinary

//middleware
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("Hallow World");
});

app.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
