export class Clock {
    constructor(canvasElement){
        this.canvas = document.getElementById(`${canvasElement}`);
        this.canvas.height = this.canvas.width;
        this.ctx = canvas.getContext('2d');
        this.clockWidth = this.canvas.width -10;
        this.centerX = canvas.width / 2;
        this.centerY = canvas.height / 2;
    }

    ticker(seconds, minutes){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height );
        //this.drawClock()
        
        
        //minutes
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 3;
        this.drawHand(this.clockWidth / 2, minutes * 6);
    
        //seconds
        this.ctx.strokeStyle = 'red';
        this.ctx.lineWidth = 1;
        this.drawHand(this.clockWidth / 2, seconds * 6);
    }

    drawHand(length, angle){
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.translate(this.centerX, this.centerY);
        this.ctx.rotate(-180 * Math.PI / 180);
        this.ctx.rotate(angle * Math.PI / 180);
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(0, length - 5);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.restore();
    }

    drawClock(){
        this.ctx.beginPath();
        this.ctx.arc(this.centerX, this.centerY, this.clockWidth / 2, 0, 2* Math.PI, false);
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 3; 
        this.ctx.stroke();
        this.ctx.closePath();
    }  

}
