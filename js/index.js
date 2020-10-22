


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
  ctx.drawImage(car, 120, 370, 40, 70);
}
};
 class car {
   constructor() {
     this.x = 120;
     this.y = 230;
   } 
   moveLeft() {
     this.x -= 25;
   }
   moveRight(){
     this.x += 25;
   }
 }

