let tg=window.Telegram.Webapp;
tg.expand();

tg.MainButton.textColor="#FFFFFF"
tg.MainButton.textColor="#FC3005"

let btn1=document.getElementById("btn1")

btn1.addEventListener("Click", function (){
    tg.MainButton.setText("btn1 bosildi")
    tg.MainButton.show()
})