function how_to_play()
{
    window.location = "help.html";
}

function user_value()
{
    p1n = document.getElementById("name_input1").value;
    p2n = document.getElementById("name_input2").value;
    localStorage.setItem("player1", p1n);
    localStorage.setItem("player2", p2n);
    window.location = "game.html";

    name2len = p2n.length;
    localStorage.setItem("player2len", name2len);
}
