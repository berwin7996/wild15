$(document).ready(function() {
    $("#lyrics").focus();
    $("#lyrics").bind("keypress", {}, keypressInBox);
});


function sendNote(inputtext) {
  // console.log(inputtext);
  socket.emit("song", {text:inputtext});
}

// $('#lyrics').keypress(function(e) {
//             // Enter pressed?
//       if(e.which == 10 || e.which == 13) {
//           // $('#lyricform').subm.it();
//           alert(inputtext);
//           sendNote($("lyrics").value);
//       }
//   });

// $('#lyricform').on('submit', function(e){
//     // $.ajax({
//     // success: function(data){
//       alert(inputtext);
//       sendNote($("lyrics").value);
//     // }
//   // })
// });


function keypressInBox(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) { //Enter keycode                        
        // e.preventDefault();

        sendNote($("#lyrics").val());
    }
};