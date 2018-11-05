var audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "assets/audio/Victory-Fanfare.mp3");

var timer;
$("#play").on("click",function(){
    $("#main-container").removeClass("hide")
    $("#play").addClass("hide")

    var time = 90
    $("#clock").html(time)
    timer = setInterval(function(){
        time--
        $("#clock").html(time)
        if(time == 0){
            checkAns()
            clearInterval(timer)
        }
    },1000)

})


function checkAns(){
    clearInterval(timer)  
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
var correctAns = 0;

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

// console.log (correctAns)

if (correct > 7) {
 audioElement.play()
$("#stop-music").removeClass("hide")
$("#stop-music").on("click",function(){
     audioElement.pause()
 })
}

else {
    setTimeout(function(){
        alert ("You lost the Game. Try Again")
    },500)
    
}


$("#afterSubmission").style.visibility = "visible";
$("#correctAnswers").text("You got " + correct + " correct.");
}












