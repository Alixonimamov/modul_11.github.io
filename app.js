let tg=window.Telegram.Webapp;
tg.expand();

tg.MainButton.textColor="#FFFFFF"
tg.MainButton.textColor="#fc3005"

let btn1=document.getElementById("btn1")

let rbtn1=document.getElementById("rbtn1")
let abtn=document.getElementById("abtn1")

let rbtn2=document.getElementById("rbtn2")
let abtn2=document.getElementById("abtn2")

let rbtn3=document.getElementById("rbtn3")
let abtn3=document.getElementById("abtn3")

let rbtn4=document.getElementById("rbtn4")
let abtn4=document.getElementById("abbtn4")

let item=""
let num_count=0

number=document.getElementById("count")
abtn.addEventListener("click", function (){
    number.innerText=num_count +1;
    number.style.display="block";
})

btn1.addEventListener("click", function (){
    tg.MainButton.setText("Burger")
})