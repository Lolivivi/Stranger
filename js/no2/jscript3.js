var passage = document.getElementsByClassName("passage");
var forward = document.getElementsByClassName("forward");
var next = document.getElementsByClassName("next");
var start = document.getElementById("start");
var body = document.getElementsByTagName("body")[0];
var bg = document.getElementsByClassName("bg");
var title = document.getElementById("title");
var sign = document.getElementById("sign");
var container = document.getElementById("container");


window.onload = function(){
    bg[0].style.opacity = 100;    
}
container.onmouseover = function(){
    this.style.cursor = "url(images/arrow.png), auto";
}
start.onclick = function(){
    animate(bg[0], {opacity:0}, 10);
    animate(bg[1], {opacity:100}, 10);
    animate(title, {opacity:0}, 10);
    animate(sign, {opacity:0}, 10);
    animate(start, {opacity:0}, 10);
    animate(container, {marginTop:-505}, 10);
}
forward[0].onclick = function(){
    animate(title, {opacity:100}, 10);
    animate(sign, {opacity:100}, 10);
    animate(bg[1], {opacity:0}, 10);
    animate(bg[0], {opacity:100}, 10);
    animate(start, {opacity:100}, 10);
    animate(container, {marginTop:250}, 10);
}
forward[1].onclick = function(){
    animate(bg[2], {opacity:0}, 10);
    animate(bg[1], {opacity:100}, 10);
    animate(container, {marginTop:-505}, 10);
}
forward[2].onclick = function(){
    animate(bg[3], {opacity:0}, 10);
    animate(bg[2], {opacity:100}, 10);
    animate(container, {marginTop:-1250}, 10);
}
next[0].onclick = function(){
    animate(bg[1], {opacity:0}, 10);
    animate(bg[2], {opacity:100}, 10);
    animate(container, {marginTop:-1250}, 10);
}
next[1].onclick = function(){
    animate(bg[2], {opacity:0}, 10);
    animate(bg[3], {opacity:100}, 10);
    animate(container, {marginTop:-1980}, 10);
}
// if(body.onwheel.)