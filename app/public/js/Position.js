"use strict"
$(document).ready(function(){
//create an array to capture each new box
var evryBOX = [];
var clickCT = 0;


  	$(function(){
        $(".draggable").draggable();
        $(".droppable").droppable();
    });
    
    //every time the user clicks this button...
    $("#boxpop").on("click", function(){
        clickCT++;

        var boxID = "box" + clickCT;
        //(for later) ...if the window space is unoccupied...
        //place a box element inside of the display window
        //console.log("user just added a box!");

        var newBox = $("<div>");
        newBox.html("Drag Me");

        newBox.attr("class", "dragme draggable");
        newBox.attr("id", boxID);

        // console.log(clickCT);

        $(".window").append(newBox);

        //make the elemnt draggable
        $(".draggable").draggable(
            {
                scroll: false,
                zIndex: 100,
                containment: "#work"
            });
    });

});