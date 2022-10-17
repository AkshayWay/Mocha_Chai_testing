const { response } = require("express");
const express = require("express");

const port = 8000;
const app = express();
const userRoutes = require("./routes/Users");
let bodyParser = require("body-parser");

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`App is running on port http://localhost:${port}`);
});

module.exports = app;
