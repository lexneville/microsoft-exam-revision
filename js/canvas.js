window.onload = function () {
    // console.log("hello");
    const drawingSurface = document.getElementById("drawingSurface");
    const ctx = drawingSurface.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(225 , 350);
    ctx.lineTo(500 , 30);
    ctx.lineTo(450 , 150);
    ctx.lineTo(599 , 399);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "red";
    ctx.lineCap = "round";
    ctx.stroke();
    // console.log("hello");

    ctx.beginPath();
    // ctx.moveTo(10, 100);
    ctx.arc(150, 100, 75, 0, 2 * Math.PI, false);
    ctx.lineWidth = 25;
    ctx.strokeStyle = "#0f0";
    ctx.lineCap = "round";
    ctx.stroke();

    ctx.beginPath();
    // ctx.moveTo(10, 100);
    ctx.arc(450, 100, 75, 1.5 * Math.PI, 2 * Math.PI, false);
    ctx.lineWidth = 25;
    ctx.strokeStyle = "blue";
    ctx.lineCap = "round";
    ctx.stroke();

    ctx.beginPath();
    // ctx.moveTo(10, 100);
    ctx.arc(150, 300, 75, 0, 2 * Math.PI, false);
    ctx.lineWidth = 25;
    ctx.strokeStyle = "#0f0";
    ctx.lineCap = "round";
    ctx.stroke();

}