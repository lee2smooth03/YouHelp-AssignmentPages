"use strict"
$(document).ready(function(){
 
	$(".resting").on("mouseover", function(){
 
    	$("#sidebar").removeClass("slideClass-OUT");
        $("#sidebar").addClass("slideClass-IN");
 
 	}); 
 
    $(".resting").on("mouseout", function(){
 
        $("#sidebar").removeClass("slideClass-IN");
        $("#sidebar").addClass("slideClass-OUT");
 
    });
 
});