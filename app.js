let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#FC3005"

// -----------------------1--------------------------

let item1 = ""
let n_count1 = 0


let count1 = document.getElementById("count1");
let rbtn1 = document.getElementById("rbtn1");
let abtn1 = document.getElementById("abtn1");

abtn1.addEventListener("click", function () {
    count1.innerText = n_count1 += 1;
    count1.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item1 = "Victoria's secret/30000/" + count1.innerText;

});
rbtn1.addEventListener("click", function () {
    if (n_count1 > 0) {
        count1.innerText = n_count1 -= 1;
    }
    count1.style.display = "inline-block";
    item1 = "Burger/30000/" + count1.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});
// ------------------2--------------------

count2 = document.getElementById("count2");
rbtn2 = document.getElementById("rbtn2");
abtn2 = document.getElementById("abtn2");
let item2 = "";
let n_count2 = 0;
rbtn2.addEventListener("click", function () {
    if (n_count2 > 0) {
        count2.innerText = n_count2 -= 1;
    }

    count2.style.display = "inline-block";
    item2 = "KFC/120000/" + count2.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn2.addEventListener("click", function () {
    count2.innerText = n_count2 += 1;
    count2.style.display = "inline-block";
    item2 = "KFC/120000/" + count2.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

// ------------------3--------------------

count3 = document.getElementById("count3");
rbtn3 = document.getElementById("rbtn3");
abtn3 = document.getElementById("abtn3");
let item3 = "";
let n_count3 = 0;
rbtn3.addEventListener("click", function () {
    if (n_count3 > 0) {
        count3.innerText = n_count3 -= 1;
    }

    count3.style.display = "inline-block";
    item3 = "LAVASH/40000/" + count3.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn3.addEventListener("click", function () {
    count3.innerText = n_count3 += 1;
    count3.style.display = "inline-block";
    item3 = "LAVASH/40000/" + count3.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

// -------------------4-------------------

count4 = document.getElementById("count4");
rbtn4 = document.getElementById("rbtn4");
abtn4 = document.getElementById("abtn4");
let item4 = "";
let n_count4 = 0;
rbtn4.addEventListener("click", function () {
    if (n_count4 > 0) {
        count4.innerText = n_count4 -= 1;
    }

    count4.style.display = "inline-block";
    item4 = "PIZZA/50000/" + count4.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn4.addEventListener("click", function () {
    count4.innerText = n_count4 += 1;
    count4.style.display = "inline-block";
    item4 = "PIZZA/50000/" + count4.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});



count5 = document.getElementById("count5");
rbtn5 = document.getElementById("rbtn5");
abtn5 = document.getElementById("abtn5");
let item5 = "";
let n_count5 = 0;
rbtn5.addEventListener("click", function () {
    if (n_count5 > 0) {
        count5.innerText = n_count5 -= 1;
    }

    count5.style.display = "inline-block";
    item5 = "SUSHI/200000/" + count5.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn5.addEventListener("click", function () {
    count5.innerText = n_count5 += 1;
    count5.style.display = "inline-block";
    item5 = "SUSHI/200000/" + count5.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


count6 = document.getElementById("count6");
rbtn6 = document.getElementById("rbtn6");
abtn6 = document.getElementById("abtn6");
let item6 = "";
let n_count6 = 0;
rbtn6.addEventListener("click", function () {
    if (n_count6 > 0) {
        count6.innerText = n_count6 -= 1;
    }

    count6.style.display = "inline-block";
    item6 = "RAMEN/85000/" + count5.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn6.addEventListener("click", function () {
    count6.innerText = n_count6 += 1;
    count6.style.display = "inline-block";
    item6 = "RAMEN/85000/" + count5.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
})


count7 = document.getElementById("count7");
rbtn7 = document.getElementById("rbtn7");
abtn7 = document.getElementById("abtn7");
let item7 = "";
let n_count7 = 0;
rbtn7.addEventListener("click", function () {
    if (n_count7 > 0) {
        count7.innerText = n_count7 -= 1;
    }

    count7.style.display = "inline-block";
    item7 = "Coca Cola/15000/" + count7.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn7.addEventListener("click", function () {
    count7.innerText = n_count7 += 1;
    count7.style.display = "inline-block";
    item7 = "Coca Cola/15000/" + count7.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
})


count8 = document.getElementById("count8");
rbtn8 = document.getElementById("rbtn8");
abtn8 = document.getElementById("abtn8");
let item8 = "";
let n_count8 = 0;
rbtn8.addEventListener("click", function () {
    if (n_count8 > 0) {
        count8.innerText = n_count8 -= 1;
    }

    count8.style.display = "inline-block";
    item8 = "Pepsi/12000/" + count8.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn8.addEventListener("click", function () {
    count8.innerText = n_count8 += 1;
    count8.style.display = "inline-block";
    item8 = "Pepsi/12000/" + count8.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
})


count9 = document.getElementById("count9");
rbtn9 = document.getElementById("rbtn9");
abtn9 = document.getElementById("abtn9");
let item9 = "";
let n_count9 = 0;
rbtn9.addEventListener("click", function () {
    if (n_count9 > 0) {
        count9.innerText = n_count9 -= 1;
    }

    count9.style.display = "inline-block";
    item9 = "Mauntain Dew/10000/" + count9.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn9.addEventListener("click", function () {
    count9.innerText = n_count9 += 1;
    count9.style.display = "inline-block";
    item9 = "Mauntain Dew/10000/" + count9.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
})

count10 = document.getElementById("count10");
rbtn10 = document.getElementById("rbtn10");
abtn10 = document.getElementById("abtn10");
let item10 = "";
let n_count10 = 0;
rbtn10.addEventListener("click", function () {
    if (n_count10 > 0) {
        count10.innerText = n_count10 -= 1;
    }

    count10.style.display = "inline-block";
    item10 = "Fanta/11000/" + count10.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn10.addEventListener("click", function () {
    count10.innerText = n_count10 += 1;
    count10.style.display = "inline-block";
    item10 = "Flash/8000/" + count10.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
})

count11 = document.getElementById("count11");
rbtn11 = document.getElementById("rbtn11");
abtn11 = document.getElementById("abtn11");
let item11 = "";
let n_count11 = 0;
rbtn11.addEventListener("click", function () {
    if (n_count11 > 0) {
        count11.innerText = n_count11 -= 1;
    }

    count11.style.display = "inline-block";
    item11 = "Flash/8000/" + count11.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn11.addEventListener("click", function () {
    count11.innerText = n_count11 += 1;
    count11.style.display = "inline-block";
    item11 = "Flash/8000/" + count11.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
})

count12 = document.getElementById("count12");
rbtn12 = document.getElementById("rbtn12");
abtn12 = document.getElementById("abtn12");
let item12 = "";
let n_count12 = 0;
rbtn12.addEventListener("click", function () {
    if (n_count12 > 0) {
        count12.innerText = n_count12 -= 1;
    }

    count12.style.display = "inline-block";
    item12 = "+18/9000/" + count12.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn12.addEventListener("click", function () {
    count12.innerText = n_count12 += 1;
    count12.style.display = "inline-block";
    item12 = "+18/9000/" + count12.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
})


count13 = document.getElementById("count13");
rbtn13 = document.getElementById("rbtn13");
abtn13 = document.getElementById("abtn13");
let item13 = "";
let n_count13 = 0;
rbtn13.addEventListener("click", function () {
    if (n_count13 > 0) {
        count13.innerText = n_count13 -= 1;
    }

    count13.style.display = "inline-block";
    item13 = "+18/9000/" + count13.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn13.addEventListener("click", function () {
    count13.innerText = n_count13 += 1;
    count13.style.display = "inline-block";
    item13 = "+18/9000/" + count13.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
})


count14 = document.getElementById("count14");
rbtn14 = document.getElementById("rbtn14");
abtn14 = document.getElementById("abtn14");
let item14 = "";
let n_count14 = 0;
rbtn14.addEventListener("click", function () {
    if (n_count14 > 0) {
        count13.innerText = n_count14 -= 1;
    }

    count14.style.display = "inline-block";
    item14 = "+18/9000/" + count14.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn14.addEventListener("click", function () {
    count14.innerText = n_count13 += 1;
    count14.style.display = "inline-block";
    item14= "+18/9000/" + count14.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
})


count15 = document.getElementById("count15");
rbtn15 = document.getElementById("rbtn15");
abtn15 = document.getElementById("abtn15");
let item15 = "";
let n_count15 = 0;
rbtn15.addEventListener("click", function () {
    if (n_count15 > 0) {
        count15.innerText = n_count15 -= 1;
    }

    count15.style.display = "inline-block";
    item15 = "+18/9000/" + count15.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn15.addEventListener("click", function () {
    count15.innerText = n_count15 += 1;
    count15.style.display = "inline-block";
    item15 = "+18/9000/" + count15.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
})
Telegram.WebApp.onEvent("mainButtonClicked", function () {
    data = item1 + "|" + item2 + "|" + item3 + "|" + item4 + "|" +item5+ "|" +item6 +"|" +item7 +"|" +item8 +"|" +item9 +"|" +item10+ "|" + item11 + "|" + item12 + "|" + item13 + "|" + item14 + "|" + item15 +
    tg.sendData(data);
});
