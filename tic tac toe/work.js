let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#reset");
let msgcon = document.querySelector(".msgcon");
let msg = document.querySelector("#msg");

let turnO=true;
let count = 0;

const winParttten = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgcon.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count ++;

        let isWinner = checkWinner();

        if(count === 9 && !isWinner){
            gameDraw();
        }
    });
});

const gameDraw = () =>{
    msg.innerText= `Game was a Draw.`;
    msgcon.classList.remove("hide");
    disableBoxes();
};  

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }   
}; 

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgcon.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () =>{
    for(let partten of winParttten){
        let pos1Val= boxes[partten[0]].innerText;
        let pos2Val= boxes[partten[1]].innerText;
        let pos3Val= boxes[partten[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);