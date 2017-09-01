var sequelize = require('sequelize');
var express = require('express')

var newUser = require("../models/user.js");

app.post("/login", function(req, res){
  var loginInfo = req.body;
//if login successful, send back a page based on their status
//if user send assignment page
//if admin send dashboard

})

app.post("/signup", function(req, res) {
    var newUser = req.body;

    var loginInfo = signup.uName.replace(/\s+/g, "").toLowerCase();

    // add the new user to the database using sequelize
    routeName.create({
      dbName: dbName,
      name: newUser.uName,
      password: newUser.pWord1,
     });    
})
