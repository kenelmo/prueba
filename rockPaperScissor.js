const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock'){
    return userInput;
  }else if(userInput === 'paper'){
    return userInput;
  }else if(userInput === 'scissors'){
    return userInput;
  }else{
    console.log('Error');
  }
};

const getComputerChoice = () =>{
  switch(Math.floor(Math.random() * 3)){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
};

function determineWinner(userChoice,computerChoice){
  if(userChoice === computerChoice){
    return 'The game is a tie';
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'The computer won';
    }else{
      return 'The user won';
    }
  }else if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'The computer won';
    }else{
      return 'The user won';
    }
  }else if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'The computer won';
    }else{
      return 'The user won';
    }
  }
}

function playGame(){
  let userChoice = getUserChoice('scissors');
  let computerChoice = getComputerChoice();
  console.log('User:' + userChoice);
  console.log('Computer:' + computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
}

playGame();