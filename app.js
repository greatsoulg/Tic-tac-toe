let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //player X, player O
let count = 0; // To track Draw

const winPatterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


const resetGame = () =>{
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        // console.log("box was clicked");
        // box.innerText = "";
        if (turnO){
            box.innerText = "O";
            turnO = false;
        } else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        //  checkWinner (); 
        count++;

        let isWinner = checkWinner();

        if(count === 9 && !isWinner){
            gameDraw();
        }

       
    });

});

const gameDraw = () =>{
    msg.innerText = `Game was Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) =>{
    msg.innerText = `congratulations, Winnner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    
}

const checkWinner = () => {
    for (let pattern of winPatterns){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(pattern[0], pattern[1], pattern[2]);

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;


        if( pos1val != "" && pos2val != "" && pos3val != ""){
          if(pos1val === pos2val && pos2val === pos3val){
            showWinner(pos1val);
            return true;
          }
        }

    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame);