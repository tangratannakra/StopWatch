import { StopWatch } from './StopWatch.js';
import { ScoreTable } from './ScoreTable.js';
import { Clock } from './Clock.js';

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const clearBtn = document.getElementById('clear');
const displayDiv = document.getElementById('display');

const sw = new StopWatch();
const dataTable = new ScoreTable(sw.data);
const clock = new Clock('canvas'); //the id of the canvas

let displayInterval = null;

startBtn.addEventListener('click', () => {
    
    sw.start();
    displayInterval = setInterval(()=>{
        displayDiv.innerText = sw.time;
        clock.ticker(sw.seconds, sw.minutes);
    }, 0);
    
});

stopBtn.addEventListener('click', () => {
    sw.stop();
});

clearBtn.addEventListener('click', () => {
    sw.clear();
    clearInterval(displayInterval);
    displayDiv.innerText = `00:00:00`;

    if(sw.data.length > 0){
        const liEl = document.querySelectorAll('ol li');
        if (sw.data.length === 1){dataTable.createTable();
        }
        
        if (sw.data.length > liEl.length ){
            dataTable.createTableEl();
        }
        
    }
});




