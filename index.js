
var randomNumber1 =Math.floor(Math.random() * 6) + 1;
var diceImage1= "images/dice"  +randomNumber1+ ".png";
var image1= document.querySelectorAll("img")[0].setAttribute("src",diceImage1);



var  randomNumber2= Math.floor(Math.random() * 6) + 1;
var diceImage2= "images/dice" +  randomNumber2 + ".png";
var image2= document.querySelectorAll("img")[1].setAttribute("src",diceImage2);
function winner(){

if(randomNumber1>randomNumber2){
    return "🏆 Player1 wins";

}else if (randomNumber1 < randomNumber2){
    return "Player2 wins 🏆";
}else {
    return "Draw";
}
}
document.querySelector("h1").innerHTML= winner();
document.querySelector("h1").style.color= "green";