var waiting=prompt("Which event are you waiting for?");
var waitDate=prompt("When is it?");
document.querySelector(".waiting").innerHTML="Waiting for "+waiting;
waitDate=new Date(waitDate);
var waitingMonth=waitDate.getMonth();
var waitingDate=waitDate.getDate();
var waitingYear=waitDate.getFullYear();
const waitMonth=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
waitingMonth=waitMonth[waitingMonth];
var output="On "+waitingDate+" "+waitingMonth+" "+waitingYear
document.querySelector(".waitDate").innerHTML=output;

function countdown(){
    var today=new Date();
    var ms=waitDate-today;
    var time=Math.floor(ms/1000);
    var sec=time%60;
    var mins=Math.floor((time/60)%60);
    var hrs=Math.floor((time/3600)%24);
    var days=Math.floor(time/3600/24);
    document.querySelector(".seconds").innerHTML=sec;
    document.querySelector(".mins").innerHTML=mins;
    document.querySelector(".hrs").innerHTML=hrs;
    document.querySelector(".days").innerHTML=days;
}

countdown();

setInterval(countdown, 1000)
