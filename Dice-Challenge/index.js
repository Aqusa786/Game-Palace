var randomNumber1= Math.floor((Math.random()*6))+1;
var randomNumber2= Math.floor((Math.random()*6))+1;
var dice1="dice"+randomNumber1+".png";
var dice2="dice"+randomNumber2+".png";
var dice1image="images/"+dice1;
var dice2image="images/"+dice2;
var image1=document.querySelectorAll("img")[0].setAttribute("src",dice1image);
var image2=document.querySelectorAll("img")[1].setAttribute("src",dice2image);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 wins!!"
}

if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="Player 2 wins!!"
}

if(randomNumber2==randomNumber1){
  document.querySelector("h1").innerHTML="Draw!!"
}
