var clicker = 0;
function hello() {
    alert('Hello!');
}
function goodbye() {
    alert('Goodbye!');
}

function clicked() {
    clicker += 1;
    document.getElementById("clicked").innerHTML = clicker;
}

function color() {
    var r = Math.ceil(Math.random()*255);
    var g = Math.ceil(Math.random()*255);
    var b = Math.ceil(Math.random()*255);
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

function resetPage() {
    clicker = 0;
    document.getElementById("clicked").innerHTML = clicker;
    document.body.style.backgroundColor = "antiquewhite";
}