var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
var img1Source = "" + randomNumber1 + ".png";
img1.setAttribute("src", img1Source);
var img1=document.querySelectorAll("img")[0];
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}