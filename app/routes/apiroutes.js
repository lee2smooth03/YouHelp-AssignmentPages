var sequelize = require('sequelize');
var express = require('express');
var path = require('path');

var newUser = require("../models/user.js");

module.exports = function(app) {

    app.post("/login", function(req, res) {
        var loginName = req.body.uName;

        //if login successful, send back a page based on their status

        USERSTUDENT.findOne({
            where: {
                user_email: loginName,
            }
        }).then(function(result) {
            console.log(result);
            //if user send assignment page
            res.sendFile(path.join(__dirname, 'positions.html'));

        })
        //if admin send dashboard **may need to change html name/page not ready
        USERADMIN.findOne({
            where: {
                user_email: loginName,
            }
        }).then(function(result) {
            console.log(result);
            res.sendFile(path.join(__dirname, 'admin.html'));

        })
    }); //app.post

    app.post("/signup", function(req, res) {
        var newUser = req.body;
        //adding new user to database
        var loginInfo = newUser.uName.replace(/\s+/g, "").toLowerCase();

        // add the new user to the database using sequelize
        USERSTUDENT.create({
            name: loginInfo,
            password: newUser.pWord1,
        }).then(function(result) {
            console.log(result);
            //if user send assignment page
            res.sendFile(path.join(__dirname, 'index.html'));
        })

    })
//when left arrow is clicked, send admin to the database **not sure of the name of the database that needs to be inserted
    app.post("/arrows", function(req,res){
        res.sendFile(path.join(__dirname, 'database'));
    })

//when left arrow is clicked, send admin to the positions page
    app.post("/arrows", function(req,res){
        res.sendFile(path.join(__dirname, 'positions.html'));
      })

}

