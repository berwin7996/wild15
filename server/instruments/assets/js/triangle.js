var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;
var canvas;
var context;

$(document).ready(function() {
    initCanvas();
    resizeCanvas();
});

$(window).resize(function() {
  //resize just happened, pixels changed
    resizeCanvas();
});

function sendNote() {
    var myurl = '/instrument/triangle/1';
    console.log(myurl);
    // document.getElementById("client-form").submit();
    // $.ajax({
    //     url: '/triangle/submit',
    //     success: function(data){
    //       console.log('ding');
    //     }
    // });

    socket.emit("triangle", {note:1});
}


function initCanvas() {
    canvas = document.getElementById("triangleCanvas");
    context = canvas.getContext("2d");
    redraw();

    canvas.addEventListener('click', function(evt) {
        sendNote();
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
     drawing = new Image();
     drawing.src = "assets/resources/triangle.png"; // can also be a remote URL e.g. http://
     // var rect = canvas.getBoundingClientRect();
     drawing.onload = function() {
        context.drawImage(drawing, canvas.width/2 - drawing.width/2, canvas.height/2 - drawing.height/2);
     };
}
