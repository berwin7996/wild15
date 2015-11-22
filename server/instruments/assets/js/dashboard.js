
function playNote(e, data) {
    // get event
    e = e || window.event;
    console.log(e);
    console.log(data.note);
    // console.log(data);
    var myurl = '/instrument/' + e + '/' + data.note;

    $.ajax({
        url: myurl,
        success: function(data){
            console.log(myurl);
        }
    });
}



var serverSocket = io.connect("http://localhost:9001");
// var serverSocket = io();
serverSocket.on('connect', function(data) {
    serverSocket.on('playpiano', function(data){
        playNote('piano', data);
    });

    serverSocket.on('playdrums', function(data){
        playNote('drums', data);
    });

    serverSocket.on('playtriangle', function(data){
        playNote('triangle', data);
    });
});


