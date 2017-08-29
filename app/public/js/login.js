$("#submit").on("click", function(e){

    e.preventDefault();
    console.log("Write a little code; Test it");

    // build an object to be sent over

    var data = {
        uName: $('#name').val().trim(),
        pWord: $('#chirp').val().trim(),
        created_at: Date()
    }

    console.log(data);
    $.post("/postChirp", data, function(data){
        console.log(data);
        getChirp();
    });
});