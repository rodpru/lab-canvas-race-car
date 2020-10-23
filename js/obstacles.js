class Obstacle  {
    constructor(x, y, width, heigth) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.heigth = heigth;        
    }

    drawObst() {
        ctx.fillStyle = 'orange';
        ctx.fillRect (this.x, this.y, this.width, this.heigth);

    }
}

