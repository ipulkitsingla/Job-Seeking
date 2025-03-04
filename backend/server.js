import app from "./app.js";
import cloudinary from "cloudinary";

const cors = require("cors");

app.use(cors({
  origin: [process.env.FRONTEND_URL],
  method: ["GET", "POST", "DELETE", "PUT"],
  credentials: true,
}));

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at pport ${process.env.PORT}`);
});
