var slide1 = document.getElementById('slide1');
var slide2 = document.getElementById('slide2');
var slide3 = document.getElementById('slide3');
var slide = document.getElementById('slide');

function change1() {
    slide1.style.backgroundColor = "#686963";
    slide2.style.backgroundColor = "white";
    slide3.style.backgroundColor = "white";
    slide.style.backgroundImage = 'url(img/education.jpg)';
}

function change2() {
    slide2.style.backgroundColor = "#686963";
    slide3.style.backgroundColor = "white";
    slide1.style.backgroundColor = "white";
    slide.style.backgroundImage = 'url(img/education1.jpg)';
}

function change3() {
    slide3.style.backgroundColor = "#686963";
    slide2.style.backgroundColor = "white";
    slide1.style.backgroundColor = "white";
    slide.style.backgroundImage = 'url(img/education3.png)';
}