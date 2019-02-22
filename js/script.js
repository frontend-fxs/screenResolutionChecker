var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
var devicePixelRatio = window.devicePixelRatio;

document.querySelector('#width').innerHTML = width;
document.querySelector('#height').innerHTML = height;
document.querySelector('#devicePixelRatio').innerHTML = devicePixelRatio;