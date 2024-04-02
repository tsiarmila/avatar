const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
// var favicon = require('serve-favicon');

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("index");
});

// app.post("/", function(req, res){
//   const avatar = {
//     title: req.body.postTitle,
//     content: req.body.postBody
//   };
//   posts.push(post);
//   res.redirect("/");
// });

app.listen(process.env.PORT || 3000, function(){
  console.log("Server started on port 3000");
})
