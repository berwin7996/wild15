var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;
var canvas;
var context;

var keywidth;
var notes = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

$(document).ready(function() {
    initCanvas();
    resizeCanvas();
});

$(window).resize(function() {
  //resize just happened, pixels changed
    resizeCanvas();
});

function sendNote(note) {
    var myurl = '/instrument/piano/' + note;
    $.ajax({
        url: myurl,
        success: function(data){
            console.log(myurl);
        }
    });
}

function whatNote(canvas, x, y) {
        // var context = canvas.getContext('2d');

        context.clearRect(0, 0, canvas.width, canvas.height);
        redraw();

        var i;
        for (i=6; i >= 0; i--) {
            // detected which key
            if (x > i*keywidth) {
                // context.fillText(notes[i], 10, 25);
                console.log(x);
                console.log(notes[i]);
                sendNote(i + 1);
                colorKey(i);
                break;
            }
        }
}

function initCanvas() {
    canvas = document.getElementById("pianoCanvas");
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
    canvasWidth = canvas.width;
    canvasHeight = canvas.width;
    redraw();
}

function redraw() {
    keywidth = canvasWidth/7;

    // white keys
    var whichkey = 0
    for (whichkey; whichkey < 8; whichkey++) {
        context.rect(whichkey*keywidth, 0, keywidth, canvasHeight);
        context.stroke();
    }

    // drawing = new Image();
    // drawing.src = "assets/91.png"; // can also be a remote URL e.g. http://
    // drawing.onload = function() {
    //    context.drawImage(drawing,0,0);
    // };
}

function colorKey(key) {
    // context.rect();
    context.fillStyle = "#DDDDDD"
    context.fillRect(key*keywidth, 0, keywidth, canvasHeight);
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

