var i = 1;
var klik = false;
var interval = prompt("Podaj szybkosc dzika [ms]: ");
var latency;
var now;
function funDzika(){
    if (klik == false && i%7==0 || klik == false && czy7(i)==true){
        clearInterval(mojInterval);
        document.getElementById("liczba").innerText = "Przegrałeś :(";
    }   else {
    
        klik = false;
        i++;
        interval = interval/2;
        document.getElementById("liczba").innerText = i;
        document.getElementById("liczba").style.color = "black";
        now = Date.now();
    }
}
let mojInterval = setInterval(funDzika, interval)
function klikDzik(){
    var nowklik = Date.now();
    klik = true;
    if (i%7==0 || czy7(i)==true){
        document.getElementById("liczba").style.color = "green";
        var mili = (nowklik - now)/1000;
        document.getElementById("tab").innerText += "\n" + mili + "s dla liczby " + i;
    }
    else
    {
        clearInterval(mojInterval);
        document.getElementById("liczba").innerText = "Kliknąłeś złą liczbę :(";
        document.getElementById("liczba").style.color = "red";
    }
}
function czy7(i){
    var num = i.toString();
    return num.includes(7);
}
