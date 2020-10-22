


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const road = new Image();
road.src = '/images/road.png';

const car = new Image();
car.src = '/images/car.png'


function startGame() {
  ctx.drawImage(road, 0, 0, 500, 700);
  ctx.drawImage(car, 250, 550, 60, 90);
}
};

 class car {
   constructor() {
     this.x = 120;
     this.y = 230;
   } 
   moveLeft() {
     this.y -= 25;
   }
   moveRight(){
     this.y += 25;
   }
 }

