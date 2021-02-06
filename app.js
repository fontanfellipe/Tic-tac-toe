//Title
const titleDiv = document.querySelector('#title');
const title = document.createElement('H1');
title.innerText = 'Tic Tac Toe : The Game';
title.classList.add('display-4')
titleDiv.appendChild(title);
//Subtitle
const subtitle = document.createElement('H3');
subtitle.innerText = "Whoever play with X, plays first!";
subtitle.classList.add('lead');
titleDiv.appendChild(subtitle);
//Win Check
const winDiv = document.querySelector('#winCheck');
const winAlert = document.createElement('H4');

var count = 1;

var ticTacToeArray = [1,2,3,4,5,6,7,8,9];

const turn = (e) => {
    e.preventDefault();

    if(e.target.matches('.cell')){
        const cell = document.querySelector('#' + e.target.getAttribute('id'));
        //(count % 2 == 0) ? cell.innerText = 'O' cell.style.color = "black" : cell.innerText = 'X';
        if(count % 2 == 0){
            cell.innerText = 'O';
            cell.style.color = 'black'
        } else {
            cell.innerText = 'X';
            cell.style.color = "red";
        }
        count++;
        const cellString = String(e.target.getAttribute('id'));
        const index = parseInt(cellString.charAt(cellString.length -1));

        addItem(cell.innerText, index);
        console.log(ticTacToeArray);
        if(ticTacToeArray[0] == ticTacToeArray[3] && ticTacToeArray[3] == ticTacToeArray[6])
            checkWin(ticTacToeArray[0]);
        if(ticTacToeArray[1] == ticTacToeArray[4] && ticTacToeArray[4] == ticTacToeArray[7])
            checkWin(ticTacToeArray[1]);
        if(ticTacToeArray[2] == ticTacToeArray[5] && ticTacToeArray[5] == ticTacToeArray[8])
            checkWin(ticTacToeArray[2]);
        if(ticTacToeArray[0] == ticTacToeArray[1] && ticTacToeArray[1] == ticTacToeArray[2])
            checkWin(ticTacToeArray[0]);
        if(ticTacToeArray[3] == ticTacToeArray[4] && ticTacToeArray[4] == ticTacToeArray[5])
            checkWin(ticTacToeArray[3]);
        if(ticTacToeArray[6] == ticTacToeArray[7] && ticTacToeArray[7] == ticTacToeArray[8])
            checkWin(ticTacToeArray[6]);
        if(ticTacToeArray[0] == ticTacToeArray[4] && ticTacToeArray[4] == ticTacToeArray[8])
            checkWin(ticTacToeArray[0]);
        if(ticTacToeArray[2] == ticTacToeArray[4] && ticTacToeArray[4] == ticTacToeArray[6])
            checkWin(ticTacToeArray[2]);
        if(count == 10){
            document.removeEventListener('click', turn);
            setTimeout(function() {
                document.location.reload()
            }, 2500);
            winAlert.innerText = "Cat`s Game!";
            winDiv.appendChild(winAlert);
        }
        console.log(count)
    }
}
document.addEventListener('click', turn);

const addItem = (item, index) => {
    ticTacToeArray.splice(index, 1, item);
}

const checkWin = (position) => {

    if(position == "X"){
        document.removeEventListener('click', turn);
        setTimeout(function() {
            document.location.reload()
        }, 2500);
        winAlert.innerText = "X has won!";
        winDiv.appendChild(winAlert);
    } 
    if(position == "O") {
        document.removeEventListener('click', turn);
        setTimeout(function() {
            document.location.reload()
        }, 2500);
        winAlert.innerText = "O has won!";
        winDiv.appendChild(winAlert);
        
    }
}
