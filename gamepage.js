player_1Name  = localStorage.getItem("player1");
player_2Name = localStorage.getItem("player2");
player_1Score = 0;
player_2Score = 0;
document.getElementById("player_1Name").innerHTML = player_1Name + ":";
document.getElementById("player_2Name").innerHTML = player_2Name + ":";
document.getElementById("player_1Score").innerHTML = player_1Score;
document.getElementById("player_2Score").innerHTML = player_2Score;
document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player_1Name;
document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player_2Name;

function send() {
    number1 = document.getElementById("Number1").value;
    number2 = document.getElementById("Number2").value;
    questionBox = "<h4> Q. " + number1 + " x " + number2 + "</h4>";
    inputBox = "<br> Answer: <input id = 'inputCheckBox' type = 'text'>";
    submitButton = "<br><br> <button class ='btn btn-info' onclick = 'check()'> Check </button>"
    row = questionBox + inputBox + submitButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("Number1").value = "";
    document.getElementById("Number2").value = "";
}

questionTurn = "player1";
answerTurn = "player2";

function check() {
    getValue = document.getElementById("inputCheckBox").value;
    actualAnswer = parseInt(number1) * parseInt(number2);
    playerAnswer = parseInt(getValue);
    console.log(actualAnswer);
    if (playerAnswer == actualAnswer) {
        if (answerTurn == "player1") {
            player_1Score = player_1Score + 1;
            document.getElementById("player_1Score").innerHTML = player_1Score;
        }
        else {
            player_2Score = player_2Score + 1;
            document.getElementById("player_2Score").innerHTML = player_2Score;
        }
    }
    if (answerTurn == "player1") {
        answerTurn = "player2";
        document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player_2Name;
    }
    else {
        answerTurn = "player1";
        document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player_1Name;
    }

    if (questionTurn == "player1") {
        questionTurn = "player2";
        document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player_2Name;
    }
    else {
        questionTurn = "player1"
        document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player_1Name;
    }

    document.getElementById("output").innerHTML = "";
}