var p1score = 0;
var p2score = 0;
name2len = localStorage.getItem("player2len");

function logout()
{
    window.location = "index.html";
}

function pname()
{
    player1name = localStorage.getItem("player1");
    player2name = localStorage.getItem("player2");
    console.log(player1name);
    console.log(player2name);

    document.getElementById("p1n").innerHTML = player1name + ": ";
    document.getElementById("p2n").innerHTML = player2name + ": ";
    document.getElementById("p1s").innerHTML = p1score;
    document.getElementById("p2s").innerHTML = p2score;

    document.getElementById("qturn").innerHTML = "Question Turn- " + player1name;
    document.getElementById("aturn").innerHTML = "Answer Turn- " + player2name;
    document.getElementById("qturn").style.width = 1000;
    document.getElementById("aturn").style.width = 1000;

    if (name2len == 1)
    {
        document.getElementById("p2n").style.marginLeft = 1230;
    } else if (name2len == 2)
    {
        document.getElementById("p2n").style.marginLeft = 1220;
    } else if (name2len == 3)
    {
        document.getElementById("p2n").style.marginLeft = 1190;
    } else if (name2len == 4)
    {
        document.getElementById("p2n").style.marginLeft = 1150;
    } else if (name2len == 5)
    {
        document.getElementById("p2n").style.marginLeft = 1100;
    } else if (name2len == 6)
    {
        document.getElementById("p2n").style.marginLeft = 1090;
    } else if (name2len == 7)
    {
        document.getElementById("p2n").style.marginLeft = 1070;
    }
    else if (name2len == 8)
    {
        document.getElementById("p2n").style.marginLeft = 1050;
    } else if (name2len == 9)
    {
        document.getElementById("p2n").style.marginLeft = 1030;
    }
}


function send()
{
    numb1 = document.getElementById("num1").value;
    console.log(numb1);

    numb2 = document.getElementById("num2").value;
    console.log(numb2);
    
    q = "<h4>" + numb1 + " x " + numb2 + "</h4>";
    a = "<h5 id='inp_label'>Answer:</h5><input type='text' class='form-control' placeholder='Enter Answer Here' id='ans_input'>";
    b = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    all = q+a+b
    document.getElementById("output").innerHTML = all;
    document.getElementById("output").style.height = 160;

    product = numb1 * numb2;
}

var qturn = "pl1";
var aturn = "pl2";

function check()
{
   ans = document.getElementById("ans_input").value;
   console.log(ans);

   if (ans == product)
   {
       if (aturn == "pl1")
       {
           p1score = p1score + 1;
           document.getElementById("p1s").innerHTML = p1score;
       } else 
       {
           p2score = p2score + 1;
           document.getElementById("p2s").innerHTML = p2score;
       }
   }

   if (qturn == "pl1")
   {
       qturn = "pl2";
       document.getElementById("qturn").innerHTML = "Question Turn- " + player2name;
   } else 
   {
       qturn = "pl1";
       document.getElementById("qturn").innerHTML = "Question Turn- " + player1name;
   }

   if (aturn == "pl1")
   {
       aturn = "pl2";
       document.getElementById("aturn").innerHTML = "Answer Turn- " + player2name;
   } else 
   {
       aturn = "pl1";
       document.getElementById("aturn").innerHTML = "Answer Turn- " + player1name;
   }

   document.getElementById("output").innerHTML = "";
   document.getElementById("output").style.height = 50;
   document.getElementById("num1");
   document.getElementById("num2");
   num1.value = " ";
   num2.value = " ";

}