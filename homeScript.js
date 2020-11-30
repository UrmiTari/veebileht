//allikas https://www.youtube.com/watch?v=VlwSz2dXK_8&t=1s
//muutuja bleep on uus audio element
var laugh = new Audio();
//lähtefail
laugh.src = "laugh.mp3";
//funktsioon heli mängimiseks
function playBtnSound (num) {
    laugh.play(); 
}