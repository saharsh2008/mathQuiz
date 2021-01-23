function addUser() {
    player_1Name = document.getElementById("player1NameInput").value;
    player_2Name = document.getElementById("player2NameInput").value;
    localStorage.setItem("player1", player_1Name);
    localStorage.setItem("player2", player_2Name);
    window.location = "gamepage.html";
}
