var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;
var canvas;
var context;

var keywidth;
var keyheight;

$(document).ready(function() {
    initCanvas();
    resizeCanvas();
});

$(window).resize(function() {
  //resize just happened, pixels changed
    resizeCanvas();
});

function sendNote(note) {
    var myurl = '/instrument/drum/' + note;
    socket.emit("drums", {note: note});

    // $.ajax({
    //     url: myurl,
    //     success: function(data){
    //         console.log(myurl);
    //     }
    // });
}

function whatNote(canvas, x, y) {
        // var context = canvas.getContext('2d');

        context.clearRect(0, 0, canvas.width, canvas.height);
        redraw();

        var i;
        var j;
        // 3x2
        for (i=2; i >= 0; i--) {
            // detected which key
            for (j=1; j >= 0; j--){
                if (x > i*keywidth && y > j*keyheight) {
                    // context.fillText(notes[i], 10, 25);
                    var stri = x + ', ' + y;
                    console.log(stri);
                    // console.log(notes[i]);
                    sendNote(j*3 + i +1);
                    colorKey(j*3 + i);
                    i = -1;
                    break;
                }
            }
            
        }
}

function initCanvas() {
    canvas = document.getElementById("drumsCanvas");
    context = canvas.getContext("2d");
    redraw();

    canvas.addEventListener('click', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        whatNote(canvas, mousePos.x, mousePos.y);
      }, false);


}

function resizeCanvas() {
    console.log('resized to' + window.innerWidth + 'x' + window.innerHeight);
    // var canvasDiv = document.getElementById('canvasDiv');
    // canvas = document.getElementById('pianoCanvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    redraw();
}

function redraw() {
    keywidth = canvas.width/3;
    keyheight = canvas.height/2

    var whichkey = 0
    for (whichkey; whichkey < 6; whichkey++) {
        context.rect((whichkey%3)*keywidth, Math.floor(whichkey/3.0)*keyheight, keywidth, canvas.height/2);
        context.stroke();
    }

    // context.line(0, canvas.height/2, canvas.width, canvas.height/2);

    // drawing = new Image();
    // drawing.src = "assets/91.png"; // can also be a remote URL e.g. http://
    // drawing.onload = function() {
    //    context.drawImage(drawing,0,0);
    // };
}

function colorKey(key) {
    // context.rect();
    context.fillStyle = "#DDDDDD";
    // context.fillRect(key*keywidth, 0, keywidth, canvas.height);
    context.fillRect((key%3)*keywidth, Math.floor(key/3.0)*keyheight, keywidth, keyheight);

}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

