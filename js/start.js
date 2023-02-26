/*
Vorläufiger Code für später
var playercountinput = document.getElementById('playerscount');

playercountinput.addEventListener()

*/

function checkplayercount() {
    var playercount = document.getElementById(playerscount);
    if(playercount = 1){
        document.getElementById(colorplayer1).style.display = "block";
    } else if (playercount = 2) {
        document.getElementById(colorplayer1).style.display = "block";
        document.getElementById(colorplayer2).style.display = "block";
    } else if (playercount = 3) {
        document.getElementById(colorplayer1).style.display = "block";
        document.getElementById(colorplayer2).style.display = "block";
        document.getElementById(colorplayer3).style.display = "block";
    }else {
        document.getElementById(colorplayer1).style.display = "block";
        document.getElementById(colorplayer2).style.display = "block";
        document.getElementById(colorplayer3).style.display = "block";
        document.getElementById(colorplayer4).style.display = "block";
    }
}