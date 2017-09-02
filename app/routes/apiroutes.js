var sequelize = require('sequelize');
var express = require('express');
var path = require('path');

var newUser = require("../models/user.js");

app.post("/login", function(req, res){
  var loginName = req.body.uName;

  //if login successful, send back a page based on their status
  
  USERSTUDENT.findOne({
    where: {
      name: loginName,
      }
    }).then(function(result){
        console.log(result);
        //if user send assignment page
          res.sendFile(path.join(__dirname, 'positions.html'));

    })
//if admin send dashboard

});//app.post

app.post("/signup", function(req, res) {
    var newUser = req.body;
    //adding new user to database
    var loginInfo = newUser.uName.replace(/\s+/g, "").toLowerCase();

    // add the new user to the database using sequelize
    USERSTUDENT.create({
      name: loginInfo,
      password: newUser.pWord1,
     }).then(function(result){
          console.log(result);
          //if user send assignment page
          res.sendFile(path.join(__dirname, 'index.html' ));    
})