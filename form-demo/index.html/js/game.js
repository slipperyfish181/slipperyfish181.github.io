//this is for my truths and lie game

//global variable

let fname = "";

function greet() {
    let greetParagraph = document.getElementById("greet");

    //get values from the form
    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    //show the result
    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname + "!"


}
function trivia() {
    let triviaAnswer = document.getElementById("trivia-answer");
    //get results of selected trivia answer 
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    //process answers
    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + "you are wrong, insert snide coomment";
    } else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + "you are wrong insert snide comment"
    } else {
        triviaAnswer.innerHTML = fname + "Correct, you are a genius"
    }


}
function truths() {
    let truthsAnswer = document.getElementById("truths-answer");
    let heightSelected = document.getElementById("height").checked;
    let surfingSelected = document.getElementById("surfing").checked;
    let germanySelected = document.getElementById("germany").checked;

    if (heightSelected) {
        truthsAnswer.innerHTML = fname + "you are correct, horray"
    } else if (surfingSelected) {
        truthsAnswer.innerHTML = fname + "you are wrong, go back to studying"
    } else {
        truthsAnswer.innerHTML = fname + "you are wrong, you have been banned by the mods"
    }

}