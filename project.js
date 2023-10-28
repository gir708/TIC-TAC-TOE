let game = new Audio("finish.mp3");
let onetap = new Audio("onetap.mp3");
let turn="X"
let gameover = false;

//function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0":"X"
}

//FUNCTION TO CHECK WIN
const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, -15, 5, 0],
        [3, 4, 5, -15, 15, 0],
        [6, 7, 8, -15, 25, 0],
        [0, 3, 6, -25, 15, 90],
        [1, 4, 7, -15, 15, 90],
        [2, 5, 8, -5, 15, 90],
        [0, 4, 8, -15, 15, 44],
        [2, 4, 6, -14, 13, 135],
    ]
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won"
            gameover = true
            game.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
           document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext =element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
           boxtext.innerText = turn;
            turn = changeTurn();
            onetap.play();
            checkWin();
            if(!gameover){
            document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;

            }
            } 
    })
})

reset.addEventListener('click' , ()=>{
    let boxtex =document.querySelectorAll('.boxtext');
    Array.from(boxtex).forEach(element =>{
    element.innerText = ""
    })
    turn = "X";
        gameover = false
        document.querySelector(".line").style.width = "0vw";
        document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})