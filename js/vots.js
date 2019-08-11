window.onload = function () {

    canvas = document.getElementById("myCanvas");
    canvasContext = canvas.getContext('2d');
    var frames = 60;
    setInterval(animate,1000/frames);    
}
function background(){
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0,0, canvas.width, canvas.height);
    }
var ship;
    ship = {
    height:50,
    lenth:30,
    x:355,
    y:460,
    shipAccelX:0,
    shipAccelY:0
};

function player(){
    canvasContext.beginPath();
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(ship.x,ship.y,ship.lenth,ship.height)
    if (controls.right){
        ship.shipAccelX+=0.15;
    }
    if (controls.left){
        ship.shipAccelX-=0.15;
    }
    if (controls.dowm){
        ship.shipAccelY+=0.15;
    }
    if (controls.up){
        ship.shipAccelY-=0.15;
    }
    if (ship.shipAccelX == 1){
        ship.shipAccelX = 1;
    }
    if (ship.shipAccelX == -1.5){
        ship.shipAccelX = -1.5;
    }
    if (ship.shipAccelY == 1.5){
        ship.shipAccelY = 1.5;
    }
    if (ship.shipAccelY == -1.5){
        ship.shipAccelY = -1.5;
    }
    ship.x+=ship.shipAccelX;
    ship.y+=ship.shipAccelY;
    
    if(ship.x<=0){
        ship.shipAccelX=0;
        ship.x=0;
    } else if(ship.x>=cavas.width-ship.lenth){
        ship.x=750-ship.lenth;
    }
        if(ship.y<=0){
        ship.y=0;
    } else if(ship.y>=600){
        ship.y=600;
    }
}


function animate() {
   background();
   player();
}
var controls;
controls = {
    up:false,
    down:false,
    right:false,
    left:false,
    keyListner:function(event){
        var keyState = (event.type =="keydown")?true:false;
        switch(event.keyCode){
            case 38:
                controls.up = keyState;
                break;
            case 40:
                controls.dowm = keyState;
                break;
            case 37:
                controls.left = keyState;
                break;
            case 39:
                controls.right = keyState;
                break;
        }
    }
};
window.addEventListener("keydown",controls.keyListner)
window.addEventListener("keyup",controls.keyListner);