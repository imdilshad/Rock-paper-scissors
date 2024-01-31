//let result;
// let score={
  //   win:0,lost:0,tie:0
  // }
let userScore=0;
let compScore=0;
let tieScore=0;
let userScr=document.querySelector("#user-score");
let compScr=document.querySelector("#comp-score");
let tieScr=document.querySelector("#tie-score");
let userdmd;
let msg=document.querySelector("#msg");


let computerMove;

let button=document.querySelectorAll(".d");

button[0].addEventListener("click",()=>{
genCompChoice();
getresult('rock',computerMove);
})

button[1].addEventListener("click",()=>{
  genCompChoice();
  getresult('paper',computerMove);
})

button[2].addEventListener("click",()=>{
  genCompChoice();
  getresult('scissors',computerMove);
})


function genCompChoice()
{
  let randomNumber=Math.random() * 3;
  console.log(randomNumber)
  if(randomNumber>0 && randomNumber<=1){
computerMove='rock';                 
}
else if( randomNumber>1 && randomNumber<=2)
{
  computerMove='scissors';
}
else
{
  computerMove="paper";
}
}


const showWinner=(userwin,userMove,computerMove)=>{
if(userwin){
  userScore++;
  userScr.innerText=userScore;
    msg.style.backgroundColor="green"
      msg.innerText= `You Win!.Your ${userMove} beats computer's ${computerMove}`;
}
else{
  compScore++;
  compScr.innerText=compScore;
    msg.style.backgroundColor="red"
    msg.innerText= `You Lost!.Computer's ${computerMove} beats yours ${userMove}`;
}
}

const draw=()=>{
  tieScore++;
  tieScr.innerText=tieScore;
  msg.style.backgroundColor="rgb(8, 8, 22)"
  msg.innerText= 'Its a tie';
}
function getresult(userMove,computerMove)
{
  
  if(userMove===computerMove){
   draw();
  }
  else{
    let userwin=true;
    if(userMove='rock'){
      userwin=computerMove==="paper"?false:true;
    }
    else if(userMove='paper')
    {
    userwin=computerMove==="scissors"?false:true;
    }
    else{
      userwin=computerMove==="rock"?false:true;
    }
    showWinner(userwin,userMove,computerMove)
  }
    
}

button.forEach((choice) =>{
  userdmd=choice.getAttribute("id");
  console.log(userdmd)
  })