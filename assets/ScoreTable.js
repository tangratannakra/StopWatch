let scoreContainer = null; 

export class ScoreTable {
    constructor(data){
        this.data = data;
    }

    createTable(){
        const scoreDiv = document.getElementById('score-table')
        scoreContainer = document.createElement('ol');

        scoreDiv.appendChild(scoreContainer);
    };

    createTableEl(){
        const scoreListEl = document.createElement('li');
        scoreContainer.appendChild(scoreListEl);
        scoreListEl.textContent = this.data[this.data.length - 1];
    }

    clearRecord(){
        this.data = [];
        //delete data
        //delete table
        //TO DO
    }
}