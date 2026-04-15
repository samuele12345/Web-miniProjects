const bottoni = document.querySelectorAll(".but");
let pChoice;
let compChoice;
let risult = document.querySelector("#tit-res");
let pl = document.querySelector("#tit-pl");
let cp = document.querySelector("#tit-comp");
let bal = document.querySelector("#balance");
let nWin = 0;
let nLose = 0;
const h1s = document.querySelectorAll(".pl-holder");
// alternativa con array
// const coiches = ["rock", "paper", "scissors"]


/*
guardare score (vittorie/sconfitte), ternary operator e colori win-lose (verde-rosso)
*/

function playerCompChoice(choice){
    pChoice = choice;
    const num = Math.floor(Math.random() * 3);
    // const num = coiches[Math.floor(Math.random() * 3)];

    switch(num){
        case 0:
            compChoice = "rock";
            break;
        case 1:
            compChoice = "paper";
            break;
        case 2:
            compChoice = "scissors";
            break;
    }
}

function winLose(){
    let result;

    if(pChoice === compChoice){
        result = "tie";
    }else if((pChoice === "rock" && compChoice === "paper") || (pChoice === "paper" && compChoice === "scissors") || (pChoice === "scissors" && compChoice === "rock")){
        result = "lose";
    }else{
        result = "win";
    }

    return result;
}


bottoni.forEach(button =>{
    button.addEventListener("click", () =>{

        if((nLose + nWin) === 0){
            h1s.forEach(h1 =>{
                h1.classList.add("visible");
            });
        }

        const res = winLose();

        pl.textContent = `${pChoice}`
        cp.textContent = `${compChoice}`

        if(res === "win"){
            risult.style.color = "rgb(10, 218, 10)"
            risult.textContent = `YOU WIN!`;
            nWin++;
        }else if(res === "lose"){
            risult.style.color = "rgb(255, 25, 25)"
            risult.textContent = `YOU LOSE!`;
            nLose++;
        }else{
            risult.style.color = "rgb(72, 71, 71)"
            risult.textContent = `TIE!`;
        }

        let balance = nWin-nLose;

        if(balance < 0){
            bal.style.color = "rgb(255, 25, 25)"
        }else if(balance > 0){
            bal.style.color = "rgb(10, 218, 10)"
        }else{
            bal.style.color = "rgb(72, 71, 71)"
        }

        bal.textContent = `Balance: ${balance}`
    });
});