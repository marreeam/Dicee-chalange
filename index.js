var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
document.querySelector(".img1");
document.querySelector(".img1").attributes;
document.querySelector(".img1").getAttribute("src");
document.querySelector(".img1").setAttribute("src", `./images/dice${randomNumber1}.png`);
var x = document.querySelector(".img2");
document.querySelector(".img2").attributes;
document.querySelector(".img2").getAttribute("src");
document.querySelector(".img2").setAttribute("src", `/images/dice${randomNumber2}.png`);
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML= "PLAYER 1 WINS !"
}else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML= "PLAYER 2 WINS !"
}else if ( randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML= "DRAW!"
}