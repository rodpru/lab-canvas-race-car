


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const road = new Image();
road.src = '/images/road.png';


// const car = new Image();
// car.src = '/images/car.png'

function startGame() {
  ctx.drawImage(road, 0, 0, 500, 700);
  player.draw();
  // ctx.drawImage(car, 120, 370, 40, 70);
}
};
 class car {
   constructor() {
     this.x = 220;
     this.y = 600;

     const image = new Image();
     image.src = '../images/car.png';
     this.image = image;
     this.ctx = canvas.getContext('2d');
   } 
   moveLeft() {
     this.x -= 25;
   }
   moveRight(){
     this.x += 25;
   }
   draw() {
     this.ctx.drawImage(this.image, this.x, this.y, 60, 90);
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
});
