var asteroids = [
    {"id":"asteroid","x":370,"y":-30,"w":30,"h":30},
    {"id":"asteroid","x":421,"y":-23,"w":30,"h":30},
    {"id":"asteroid","x":340,"y":-82,"w":30,"h":30},
    {"id":"Ceres","x":1,"y":-12000,"w":3000,"h":3000},
    {"id":"asteroid","x":120,"y":-5,"w":30,"h":30}
]

function randomPosition(){  
var randomPl = Math.floor(Math.random()*canvas.width)+1;
asteroids.push({"id":"asteroid","x":randomPl,"y":-20,"w":30,"h":30});
}
setInterval(randomPosition,500);
function renderAsteroid() {
    var asteroidYvelocity = 1.8;
    for(var i = 0; i < asteroids.length; i++){
    canvasContext.fillStyle = "brown";
    canvasContext.fillRect (asteroids[i].x,asteroids[i].y+=asteroidYvelocity, asteroids[i].w,asteroids[i].h);   
        
    if(ship.x+ship.lenth>=asteroids[i].x
       &&asteroids[i].x+30>=ship.x
       &&ship.y+ship.height>=asteroids[i].y
       &&asteroids[i].y+30>=ship.y){
        asteroids.splice(i,1);
    ship.lenth=0;
        }
          if(asteroids[i].y>=canvas.height+5){
        asteroids.splice(i,1);
    }    
       
    }
}