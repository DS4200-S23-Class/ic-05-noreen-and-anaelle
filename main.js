let clickCount = 0

function buttonClicked(){

    let buttonDiv = document.getElementById("button-div");
    let counter = clickCount++;

    buttonDiv.innerHTML = "Number of times button clicked: " + counter;

}