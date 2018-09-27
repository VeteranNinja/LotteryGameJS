function cylinderVolume(r,h) {
    return Math.PI * r * r * h;
}

var radius = 5;
var height = 10;
var display = document.getElementByID("panel");

var volume = cylinderVolume( radius, height);
display.innerHTML = volume;