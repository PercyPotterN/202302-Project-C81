canvas1 = document.getElementById("myCanvas");
ctx = canvas1.getContext("2d");
var x=150;
var y=143;
var length=430;
var width=200;
var xgap=100;
var ygap=45;
var radius=40;
var circlelinewidth = 5

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.rect(x, y, length, width);
ctx.stroke();


ctx.lineWidth = circlelinewidth;

ctx.beginPath();
ctx.strokeStyle = "blue ";
ctx.arc(x+xgap, y+67, radius, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.arc(x+xgap+xgap, y+67, radius, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.arc(x+xgap+xgap+xgap, y+67, radius, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "gold";
ctx.arc(x+xgap+ygap, y+60+ygap, radius, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.arc(x+xgap+ygap+xgap, y+60+ygap, radius, 0, 2 * Math.PI);
ctx.stroke();
