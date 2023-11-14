let fname = "";

function greet() {
    let greetParagraph = document.getElementById("greet");

    //get values from the form
    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("telephone").value;

    //show the result
    greetParagraph.innerHTML = "Thank you for filling out the survey " + fname + " " + lname + "!"


}