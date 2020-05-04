let mseconds = 0;
let seconds = 0;
let minutes = 0;    
let startTime = null;
let updatedTime = null;
let stopTime = null;
let difference = null; //running - start time
let ticker = 0;

export class StopWatch {
    constructor(){
        this.counter = false; //stopwatch not running;
        this.paused = false;
        this.time = 0;
        this.interval = 0;
        this.ticker = 0;
        this.seconds = 0;
        this.minutes = 0
        this.data = [];    
    }

    start(){
        if (!this.counter){
            startTime  = new Date().getTime();
            this.interval = setInterval( () => { 
                this.time = StopWatch.timeAdder();
                ticker++;
                if( ticker % 60 === 0){
                    this.seconds++;
                    
                    if(this.seconds % 60 === 0){
                        this.minutes++; 
                    }
                }

                
            }, 10);
            this.counter = true;
            this.paused = false;
        }

    }

    stop(){
            if (!difference) {
                //never started
            }
            else if(!this.paused){
                this.counter = false;
                this.paused = true;
                stopTime = difference;
                clearInterval(this.interval);

            }
            else {
                this.start();
            }  
        }
        

    clear(){
        if (this.paused){
            this.interval = 0;

            if (this.time){
                this.data.push(this.time);
            }

            this.time = 0;
            this.counter = false;
            mseconds = 0;
            seconds = 0;
            minutes = 0;
            difference = 0;
            startTime = 0;
            stopTime = 0;
            this.seconds = 0;
            this.minutes = 0;
        } 
    }

    static timeAdder() {
        updatedTime = new Date().getTime();
        
        if (stopTime) {
            difference = (updatedTime - startTime) + stopTime;
        }
        else {
            difference = updatedTime - startTime
        }
        
        return timeFormatter(difference);               
    }
}



function timeFormatter(difference){
    minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((difference % (1000 * 60)) / 1000);
    mseconds = Math.floor((difference % (1000))/100 );

    //hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    mseconds = (mseconds < 10) ? "0" + mseconds : mseconds;
    
    return `${minutes}:${seconds}:${mseconds}`;
}
