var last_x_position, last_y_position;
var mouseEvent="";
var color = "blue";
var radius= 40;
var width=1;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e){
    mouseEvent = "mousedown";
}

canvas.addEventListener("mousemove", mymousemove);

function mymousemove(e){
    current_x_position = e.clientX - canvas.offsetLeft;
    current_y_position = e.clientY - canvas.offsetTop;



    
if (mouseEvent == "mousedown"){
    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth= width;
    ctx.arc(current_x_position, current_y_position, radius, 0, 2*Math.PI);
ctx.stroke();
}

last_x_position =  current_x_position;
last_y_position =  current_y_position;




}

canvas.addEventListener("mouseup", mymouseup);

function mymouseup(e){
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", mymouseleave);

function mymouseleave(e){
    mouseEvent = "mouseleave";
}



