window.onload = function () {
    // console.log("hello");
    const drawingSurface = document.getElementById("drawingSurface");
    const drawingSurface2 = document.getElementById("drawingSurface2");
    const drawingSurface3 = document.getElementById("drawingSurface3");
    const drawingSurface4 = document.getElementById("drawingSurface4");
    const drawingSurface5 = document.getElementById("drawingSurface5");
    const ctx = drawingSurface.getContext("2d");
    const ctx2 = drawingSurface2.getContext("2d");
    const ctx3 = drawingSurface3.getContext("2d");
    const ctx4 = drawingSurface4.getContext("2d");
    const ctx5 = drawingSurface5.getContext("2d");
    const orange = '../media/img/orange.jpg'

    ctx.lineWidth = 3;
    ctx.rect(50, 50, 200, 125);
    var gradient = ctx.createLinearGradient(150, 150, 200, 125);
    gradient.addColorStop(0, "Black");
    gradient.addColorStop(0.5, "Gray");
    gradient.addColorStop(1, "White");
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.stroke();

    ctx2.rect(50, 50, 200, 125);
    var gradient2 = ctx2.createRadialGradient(100, 100, 5, 100, 100, 100);
    gradient2.addColorStop(0, "red");
    gradient2.addColorStop(.5, "orange");
    gradient2.addColorStop(1, "blue");
    ctx2.fillStyle = gradient2;
    ctx2.fill();
    ctx2.stroke();   

    ctx3.rect(1, 1, 700, 198);
    var imgTile = new Image();
    imgTile.src=orange;
    imgTile.onload = function() {
        var pattern = ctx3.createPattern(imgTile, "repeat");
        ctx3.fillStyle = pattern;
        ctx3.fill();
        ctx3.stroke;
    };

    var img2 = new Image();
    var img3 = new Image();
    var img4 = new Image();
    img2.src=orange;
    img3.src=orange;
    img4.src=orange;
    img2.onload = function() {
        ctx4.drawImage(img2, 0, 0);
        ctx4.stroke();        
    }
    img3.onload = function() {
        ctx4.drawImage(img3, 250, 250, img3.width * .5, img3.height * .5);
        ctx4.stroke();        
    }
    img4.onload = function() {
        ctx4.drawImage(img3, 0, 250, img4.width * .25, img4.height * .25);
        ctx4.stroke();        
    }

    ctx5.strokeText("1. Text using the default font", 30, 30);
    ctx5.font='24px arial';
    ctx5.strokeStyle='red';  
    ctx5.strokeText("2. Text using the altered, coloured font", 30, 60);
    ctx5.font='30px helvetica'
    ctx5.fillStyle='green';  
    ctx5.fillText("3. Text using the altered, filled coloured font", 30, 100);
    ctx5.font='45px helvetica'
    ctx5.fillStyle='orange';  
    ctx5.fillText("4. Vertically centered text", 30, drawingSurface5.height/2);
    ctx5.font='40px helvetica'
    ctx5.textAlign='center';
    ctx5.fillStyle='blue';  
    ctx5.fillText("4. Horizontally centered text", drawingSurface5.width/2, 300);

    

    
}