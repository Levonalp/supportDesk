const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8000;
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome to the support desk API" });
});

//Routes
app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => console.log(`server listening on port ${port}`));
