
var hr= 0;
var min= 0;
var sec= 0;
var count =0;

var timer = false;



function start(){
    timer = true;
    stopwatch();
}
function stop(){
    timer = false;

}
function reset(){
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById("hours").innerHTML= "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("second").innerHTML = "00";
    document.getElementById("count").innerHTML = "00"; 
}
function stopwatch(){
 if(timer == true){
    count = count +1;
    if(count == 100){
        sec = sec + 1;
        count = 0;
    }
    if(sec == 60){
        min = min + 1;
        sec = 0;
    }
    if(min == 60){
        hr = hr + 1;
        min = 0;
        sec = 0;
    }
       

    // document.getElementById("hours").innerHTML= hr;
    // document.getElementById("minutes").innerHTML = min;
    // document.getElementById("second").innerHTML = sec;
    // document.getElementById("count").innerHTML = count; 


    var hrString = hr;
    var minString = min;
    var secString = sec;
    var countString = count;

    if(hr < 10){
        hrString = "0"+ hrString;
    }
    if(min < 10){
        minString = "0"+minString;
    }
    if(sec < 10){
        secString = "0"+secString;
    }
    if(count < 10){
        countString = "0"+ countString;
    }

    document.getElementById("hours").innerHTML= hrString;
    document.getElementById("minutes").innerHTML = minString;
    document.getElementById("second").innerHTML = secString;
    document.getElementById("count").innerHTML = countString; 



    setTimeout("stopwatch()", 10);
 }
}