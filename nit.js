let boxes = document.querySelectorAll(".box");// access of all bx classes in varialbe boxes
let reset = document.querySelector("#reset");// access of the reset id in variable reset
let newgamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO = true;// for tracking the turn of the player
//suppose we have 2 players one is "O" & one is "X"; 

const winPatterns = [// wining patters,basically it is the position for winning .
     [0,1,2],
     [0,3,6],
     [0,4,8],
     [1,4,7],
     [2,5,8],
     [2,4,6],
     [3,4,5],
     [6,7,8]
];

const Resetgame=()=>{
    turnO=true;
};


boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnO){
            box.innerText="O";// if condition is true then print "O" after that make it false for the turn of player 2nd.
            turnO=false;
        }else{// second player turn print "X" after that make condition true for the turn of first player.
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;// this is for one time symbol conatining each block means after taping any box agin then its previous symbol is not remove.
        checkwinner();//fuction call for winner in each tap.
    });
});

const resetGame=()=>{
     turnO=true;
     enableBoxes();
     msgContainer.classList.add("hide");
};

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner = (winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const checkwinner=()=>{// winner function it will check for winner in each tap.
     for(let pattern of winPatterns){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
     }
};

newgamebtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
   


