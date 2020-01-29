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
    ctx.arc(150, 100, 100, 0, 2 * Math.PI, false);
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

    // Quadratic arc
    ctx.beginPath();
    ctx.moveTo(10, 380);
    ctx.quadraticCurveTo(300, -250, 580, 380);
    ctx.lineWidth = 25;
    ctx.strokeStyle = '#f00';
    ctx.stroke();

    // Bezier Cruve
    ctx.beginPath();
    ctx.moveTo(125, 20);
    ctx.bezierCurveTo(0, 200, 300, 300, 50, 400);
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#d50';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(300, 200, 75, 1.75 * Math.PI, 1.25 * Math.PI, false);
    ctx.lineTo(150, 125);
    ctx.quadraticCurveTo(300, 0, 450, 125);
    ctx.lineTo(353, 144);
    ctx.strokeStyle = "blue";
    ctx.lineCap = "round";
    ctx.lineWidth = 10;
    ctx.stroke();



}