require("dotenv").config();
require("./config/passport");
const express = require("express");
const cors = require("cors");
const authRoute = require("./routes/authRoute");
const freelanceRoute = require("./routes/freelanceRoute");
const categoriesRoute = require("./routes/categoriesRoute");
const postRoute = require("./routes/postRoute");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/static", express.static("public/images"));

app.use("/auth", authRoute);
app.use("/freelance", freelanceRoute);
app.use("/categories", categoriesRoute);
app.use("/post", postRoute);

app.use((req, res) => {
  res.status(400).json("Resource not found on this server");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: err.message });
});

const port = process.env.PORT || 8001;
app.listen(port, () => console.log(`server running on port ${port}`));
