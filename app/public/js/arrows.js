$("#left").on("click", function(e){

    e.preventDefault();
    console.log("left one works!");

    $.post("/arrows", data, function(data){
        console.log(data);
        
    });
})

$("#right").on("click", function(e){

    e.preventDefault();
    console.log("right one works!");

    $.post("/arrows", data, function(data){
        console.log(data);
        
    });
})
