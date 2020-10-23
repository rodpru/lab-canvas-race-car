
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  
  const road = new Image();
  road.src = '/images/road.png';


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    ctx.drawImage(road, 0, 0);
    player.draw();
    updateCanvas();
    // ctx.drawImage(car, 120, 370, 40, 70);
    }

 class car {
   constructor() {
     this.x = 220;
     this.y = 600;

     const image = new Image();
     image.src = '../images/car.png';
     this.image = image;
   } 
   moveLeft() {
     if(this.x <= 35 ) {
       return this.x = 35;
     } else {
       this.x -= 25;
     }
   }
   moveRight(){
     if(this.x >= 375) {
       return this.x = 375;
     } else {
       this.x += 25;
     }
   }
   draw() {
     ctx.drawImage(this.image, this.x, this.y, 60, 90);
   }
 }
 let player = new car();

 document.addEventListener('keydown', e => {
  switch(e.keyCode) {
      case 37:
        player.moveLeft();
      break;
      case 39:
        player.moveRight();
      break;
  }
  updateCanvas();
});

let obstacleFrequency = 0; // --> how many obstacles
let obstaclesArray = [];
function updateCanvas() {   // ---> always have to have this function to keep drawing the car
  ctx.clearRect(0, 0, 500, 700);
  // ctx.fillText(`Player x: ${player.x}`, 400, 40);
  // ctx.fillText(`Player y: ${player.y}`, 400, 60);
  ctx.drawImage(road, 0, 0, 500, 700);
  player.draw(); 
  frames++;
  if(obstacleFrequency % 100 === 1) {
    //draw obstacle
    let randomObstX = Math.random(Math.floor() * 450);
    let randomObstY = 0; // --> 0 because it will always appear from the top
    let randomObstWidth = Math.random(Math.floor() * 50 ) + 20;
    let randomObstHeight = Math.random(Math.floor() * 50 ) + 20;
    let newObstacle = new Obstacle(randomObstX, randomObstY, randomObstWidth, randomObstHeight);
    obstaclesArray.push(newObstacle);

    
  }
  
}
for(let i = 0; i < obstaclesArray.length; i++)
this.obstaclesArray[i].y += 1;
this.obstaclesArray[i].drawObstacle();
}
