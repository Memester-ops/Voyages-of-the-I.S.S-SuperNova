var smallAsteroid;
    smallAsteroid = [
    {"id":'small','x':canvas.width/2,'y':-35,'lenth':30,}
           ];
function asteroids(){
    canvasContext.fillStyle="blue";
    canvasContext.fillRect(smallAsteroid[i].x,smallAsteroid[i].y+=2,smallAsteroid[i].lenth,smallAsteroid[i].lenth)
    
}