const path = require("path");

const express = require("express");
const app = express();
cors = require("cors");

// var twitter = {}; // const twitter = require("./public/twitter.json");
app.use(
  express.json({
    extended: false,
  })
);
app.use(cors());

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use("/api/tweetDetail", require("./api/tweetDetail"));
let port = process.env.PORT;
if (port == null || port == "") {
  port = 4000;
}
app.listen(port, () => console.log("Server started on Port: 4000"));
