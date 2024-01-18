const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const apiRouter = require("./routes/api");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://AderdourGouaaballa:Bismilah12@qcmdata.lfghmmz.mongodb.net/"
  )
  .then(() => {
    console.log("MongoDB database connection established successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running : http://localhost:${PORT}/`);
});
