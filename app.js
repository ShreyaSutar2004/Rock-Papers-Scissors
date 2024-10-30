let UserScore=0;
let CompScore=0;

const choose= document.querySelectorAll(".choice");
const message=document.querySelector("#mymsg");

const UserUpdate=document.querySelector("#You");
const CompUpdate=document.querySelector("#Computer");


//To generate random turns from computer
const gencompturn=()=>{

    const options=["rock","paper","scissors"];
   const choiceIndex= Math.floor(Math.random())*3;
   return options[choiceIndex];

   
};

const Draw=()=>{

        console.log("The match is Draw");
        message.innerText="MATCH IS DRAW,PLAY AGAIN";
};

//Showwinner
const ShowWinner=(UserWin,Userturn,compturn)=>{
    if(UserWin){
        UserScore++;
        UserUpdate.innerText=UserScore;
        console.log("You win");
        message.innerText=`You Win you chose ${Userturn} which beats ${compturn}`;
        message.style.backgroundColor="green";

    }
    else{
        CompScore++;
        CompUpdate.innerText=CompScore;
        console.log("Comp wins");
        message.innerText=`You lose because you chose ${Userturn} does not beat ${compturn}`
        message.style.backgroundColor="red";
    }
}

//My turn
const PlayMove=(Userturn)=>{
   console.log("The user chose:",Userturn);
   //generate comp turn
   const compturn=gencompturn();
   console.log("The computer chose:",compturn);

   let UserWin=true;
   //Draw condition
   if(Userturn===compturn){
     const Drawmatch = Draw();  
   }else{
    UserWin=true; 
   }

   //conditions

   if(Userturn==="rock"){
    //comp choice-->scissor,rock
     UserWin= compturn==="paper"? false:true;
   }
   else if(Userturn==="paper"){
    //comp choice--> paper,rock
    UserWin= compturn==="scissors"? false:true;
   }
   else {
    //comp choice--> 
    UserWin=compturn=="rock"? false:true;
   }

   ShowWinner(UserWin,Userturn,compturn);

};

choose.forEach((choice)=>{

    choice.addEventListener("click",()=>{
         
        //to get the id
        const Userturn= choice.getAttribute("id");
        PlayMove(Userturn);
        
    });

});