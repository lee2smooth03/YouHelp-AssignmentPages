$(".btn-default").on("click", function(e){

    e.preventDefault();
    console.log("Write a little code; Test it");

    // build an object to be sent over

    var data = {
        uName: $('#uName').val().trim(),
        pWord: $('#pWord').val().trim(),
        created_at: Date()
    }

    console.log(data);

    $.post("/login", data, function(data){
        console.log(data);
        
    });
});

$(".btn-info").on("click", function(e){

    e.preventDefault();
    console.log("Write a little code; Test it");

    // build an object to be sent over

    var pass1 = $('#pWord1').val().trim();
    var pass2 = $('#pWord2').val().trim();

    if (pass1 === pass2)
        {

            var data = {
                uName: $('#uName').val().trim(),
                pWord: $('#pWord1').val().trim(),
                created_at: Date()
            }

            console.log(data);

            $.post("/signup", data, function(stuff){
                console.log(stuff);
                pass1 = "";
                pass2 = "";
            });
        }
    else
        {
            alert("Your Passwords don't match! Try again...");
                pass1 = "";
                pass2 = "";
        }
});