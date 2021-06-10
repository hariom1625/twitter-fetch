const express = require("express");
const app = express();
const router = express.Router();
var getJSON = require("get-json");
const getUrls = require("get-urls");

var twitter = {}; // const twitter = require("./public/twitter.json");

getJSON(
  "http://www.cs.toronto.edu/~mashiyat/csc309/Assignments/favs.json",
  function (error, response) {
    twitter = response;
  }
);

router.get("/allTweet", function (req, res) {
  // route to fetch all tweets
  var data = [];

  for (var i = 0; i < 5; i++) {
    var entry = {
      id: twitter[i].id_str,
      created_at: twitter[i].created_at,
      text: twitter[i].text,
    };
    data.push(entry);
  }
  res.json(data);
});
router.get("/allUsers", function (req, res) {
  // route to fetch user details
  var data = [];

  for (var i = 0; i < 5; i++) {
    // var s = JSON.stringify(twitter[i].text);
    // var rex = /(((https?:\/\/)|(www\.))[^\s]+)/g;

    var entry = {
      name: twitter[i].user.name,
      username: twitter[i].user.screen_name,
      desc: twitter[i].user.description,
    };
    data.push(entry);
  }
  res.json(data);
});

router.get("/allLinks", function (req, res) {
  // route to fetch external links
  var data = [];

  for (var i = 0; i < twitter.length; i++) {
    var s = twitter[i].text;
    var url = getUrls(s);
    var urls = Array.from(url);
    var entry = {
      id: twitter[i].id_str,
      link: [urls],
    };
    data.push(entry);
  }
  res.json(data);
});

router.post("/getDetails", function (req, res) {
  // route to fetch tweet by ID
  const id = req.body.id;
  var data = [];

  for (var i = 0; i < twitter.length; i++) {
    if (id === twitter[i].id_str) {
      var s = twitter[i].text;
      var url = getUrls(s);
      var urls = Array.from(url);
      var entry = {
        id: twitter[i].id_str,
        created_at: twitter[i].created_at,
        username: twitter[i].user.screen_name,
        desc: twitter[i].text,
        link: [urls],
      };
      data.push(entry);

      break;
    }
  }
  res.json(data);
});

router.post("/userDetails", function (req, res) {
  // route to fetch User info by username
  const username = req.body.username.replace(/\s+/g, " ").trim();

  var data = [];

  for (var i = 0; i < twitter.length; i++) {
    if (username === twitter[i].user.screen_name) {
      var s = twitter[i].text;
      var url = getUrls(s);
      var urls = Array.from(url);
      var entry = {
        id: twitter[i].id_str,
        created_at: twitter[i].created_at,
        username: twitter[i].user.screen_name,
        desc: twitter[i].user.description,
        link: [urls],
      };
      data.push(entry);

      break;
    }
  }
  res.json(data);
});

module.exports = router;
