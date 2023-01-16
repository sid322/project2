ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=10;
ctx.arc(300,200,40,0,2*Math.PI);
ctx.stroke();
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
