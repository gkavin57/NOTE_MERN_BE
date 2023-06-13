const express = require("express");
const app = express();

require("./src/Connection/Connection");
const noteRouter = require("./src/Routes/noteRouter");
const userRouter = require("./src/Routes/userRouter");
var cors = require("cors");
app.use(cors());

//Routes;
//Middleware;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);
app.use("/api/notes", noteRouter);

//Port Listing;
const PORT = process.env.PORT;
app.listen(process.env.PORT || PORT, () => {
  console.log("Port is Running on " + PORT);
});

app.get("/", (req, res) => {
  res.send("hello 123");
});
