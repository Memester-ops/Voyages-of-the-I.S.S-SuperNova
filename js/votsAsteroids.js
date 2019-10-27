var score = 0;

var asteroids = [
    {"x":370,"y":-30,"w":30,"h":30},
    {"x":421,"y":-23,"w":30,"h":30},
    {"x":340,"y":-82,"w":30,"h":30},
    {"x":120,"y":-5,"w":30,"h":30}
]


var  asteroidNames = [
"Vesta","Pallas","Hygiea","704 Inrerama", "443 Eros","243 Ida"]

var shipCollided = "false";
function randomPosition(){  
    //Spawns more Asteroids
var randomPl = Math.floor(Math.random()*canvas.width)+1;
asteroids.push({"x":randomPl,"y":-20,"w":30,"h":30});
}

 
setInterval(randomPosition,500);
function renderAsteroid() {
    var asteroidYvelocity = 1.8;
    for(var i = 0; i < asteroids.length; i++){
    canvasContext.fillStyle = "brown";
    canvasContext.fillRect (asteroids[i].x,asteroids[i].y+=asteroidYvelocity, asteroids[i].w,asteroids[i].h);
     
        if(ship.x+ship.lenth>=asteroids[i].x-20
       &&asteroids[i].x+50>=ship.x
       &&ship.y+ship.height>=asteroids[i].y-20
       &&asteroids[i].y+50>=ship.y
       && shipCollided=="false"){
            score+=1;
        }
    
        //collision detection
    if(ship.x+ship.lenth>=asteroids[i].x
       &&asteroids[i].x+30>=ship.x
       &&ship.y+ship.height>=asteroids[i].y
       &&asteroids[i].y+30>=ship.y
       && shipCollided=="false"){
        //destroy asteroid
        asteroids.splice(i,1);
        //destroy ship
        ship.height = 0;
        ship.lenth = 0;
        //name the asteroid you crashed into
        var randomAsteroid = asteroidNames[Math.floor(Math.random() * asteroidNames.length)];
        document.getElementById("asteroidName").innerHTML = "you crashed into "+ randomAsteroid;
        alert(score);
        shipCollided="true";
        document.getElementById("shipStatus").innerHTML = "Mission Failed!"; 

        }
    
    }
    if(asteroids[i].y>=canvas.height+5){
        asteroids.splice(i,1);
    }    
       
    }
//win
function win(){
    var ceres={
      height:1000,
      width:1000,
      x:0,
      y:-50
    };
    
    fillRect(ceres.x,ceres.y,ceres.height,ceres.width);
    ceres.y+=20;
    if(ceres.y>=ship.y){
    document.getElementById("shipStatus").innerHTML = "Mission Accomplished"; 

    }
}