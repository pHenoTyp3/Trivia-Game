var audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "assets/audio/Victory.mp3");

var mytimer

document.querySelector(".start").addEventListener("click",function(){

    document.querySelector(".main-container").classList.remove("hide")
    document.querySelector(".start").classList.add("hide")

    var time = 90
    document.querySelector(".timer").innerHTML=time
    mytimer = setInterval(function(){
    time -- 
    document.querySelector(".timer").innerHTML=time
    if (time==0){
        check()
        clearInterval(mytimer)
    }
    },1000)
})

function check(){
    clearInterval(mytimer)  
var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var question6 = document.quiz.question6.value;
var question7 = document.quiz.question7.value;
var question8 = document.quiz.question8.value;
var question9 = document.quiz.question9.value;
var question10 = document.quiz.question10.value;
var correct = 0;

if (question1 == ("Mercury")) {
    correct++;
}

if (question2 == ("42")) {
    correct++;
}

if (question3 == ("Pacific")) {
    correct++;
}

if (question4 == ("Q")) {
    correct++;
}

if (question5 == ("John A Macdonald")) {
    correct++;
}

if (question6 == ("Cancer")) {
    correct++;
}

if (question7 == ("Elephant")) {
    correct++;
}


if (question8 == ("Ear")) {
    correct++;
}

if (question9 == ("1914")) {
    correct++;
}

if (question10 == ("100C")) {
    correct++;
}

console.log (correct)

if (correct > 7) {
 audioElement.play()
 document.querySelector(".stop-music").classList.remove("hide")
 document.querySelector(".stop-music").addEventListener("click",function(){
     audioElement.pause()
 })
}

else {
    setTimeout(function(){
        alert ("Your party has been k.o'd")
    },500)
    
}


document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct. ";
}












