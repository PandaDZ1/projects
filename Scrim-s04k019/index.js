let homeScore = document.getElementById("home-number-score");
let scoreHome = 0;
let scoreGuest = 0;
let guestScore = document.getElementById("guest-number-score");

function homePlus1(){
    scoreHome +=1;
    homeScore.innerText = scoreHome
}
function homePlus2(){
    scoreHome +=2;
    homeScore.innerText = scoreHome
}
function homePlus3(){
    scoreHome +=3;
    homeScore.innerText = scoreHome
}

function guestPlus1(){
    scoreGuest +=1;
    guestScore.innerText = scoreGuest;
}
function guestPlus2(){
    scoreGuest +=2;
    guestScore.innerText = scoreGuest;
}
function guestPlus3(){
    scoreGuest +=3;
    guestScore.innerText = scoreGuest;
}
