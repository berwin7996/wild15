
function playNote(e, data) {
    // get event
    e = e || window.event;
    console.log(e);
    // console.log(data.note);
    console.log(data.text);
    if (e === 'song') {
        // var myurl = '/instrument/song/say';
        // $.ajax({
        //     url: myurl,
        //     success: function(data){
        //         console.log(data);
        //     }
        // });
        console.log(data.text);
        responsiveVoice.speak(data.text);
    }
    else {
        var myurl = '/instrument/' + e + '/' + data.note;
        $.ajax({
            url: myurl,
            body: {text: data.text, note: data.note},
            data: {text: data.text, note: data.note},
            success: function(data){
                console.log(data);
            }
        });
    }
    
}



var serverSocket = io.connect("http://localhost:9001");
// var serverSocket = io();
serverSocket.on('connect', function(data) {
    serverSocket.on('playpiano', function(data){
        playNote('piano', data);
    });

    serverSocket.on('playdrums', function(data){
        playNote('drum', data);
    });

    serverSocket.on('playtriangle', function(data){
        playNote('triangle', data);
    });

    serverSocket.on('playsong', function(data){
        playNote('song', data);
    });
});


