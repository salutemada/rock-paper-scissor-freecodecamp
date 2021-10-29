let userScore = 0;
let computerScore = 0;
const userScore_span = document.querySelector('#user-score');
const computerScore_span = document.querySelector('#computer-score');

const result_div = document.querySelector('.result');

const rock_div = document.querySelector('#rock');
const paper_div = document.querySelector('#paper');
const scissors_div = document.querySelector('#scissors');
const userImgChoice_div = document.querySelector('#user-img-choice');
const computerImgChoice_div = document.querySelector('#computer-img-choice');

function returnImg(choice){
    const imgRock = document.createElement('img');
    const imgPaper = document.createElement('img');
    const imgScissors = document.createElement('img');
    imgRock.setAttribute('src', "https://img.icons8.com/color/100/000000/hand-rock.png");
    imgPaper.setAttribute('src', "https://img.icons8.com/fluent/100/000000/hand.png");
    imgScissors.setAttribute('src', "https://img.icons8.com/color/100/000000/hand-scissors.png");
    imgRock.classList.add('choice', 'delete', 'verify');
    imgPaper.classList.add('choice', 'delete', 'verify');
    imgScissors.classList.add('choice', 'delete', 'verify');
    
    if(choice === 'rock' ){  return imgRock}
    if(choice === 'paper' ){  return imgPaper}
    if(choice === 'scissors' ){  return imgScissors}
}

function imgChoice (userChoice, computerChoice){
    
    const toDelet = document.querySelectorAll('.delete');
    toDelet.forEach(elem => elem.remove())
    
    userImgChoice_div.appendChild(returnImg(userChoice));
    computerImgChoice_div.appendChild(returnImg(computerChoice));

}



function classToggle (userChoice, outcome){

    const userChoice_div= document.querySelector('#' + userChoice);

    userChoice_div.addEventListener('animationend', () => {
        userChoice_div.classList.remove(outcome + '-class');
    })
    userChoice_div.classList.add(outcome + '-class');
}

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randoChoise = (choices[Math.floor(Math.random() * 3)]);
    return randoChoise;
}


function colorBorderImg(color1, color2){
    userImgChoice_div.firstElementChild.style.borderColor = color1;
    computerImgChoice_div.firstElementChild.style.borderColor = color2;
}

function updateScore (){
    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    imgChoice(userChoice, computerChoice);
    
    switch(userChoice + computerChoice){
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            result_div.textContent = userChoice.toUpperCase() + ' lose with ' + computerChoice.toUpperCase() + '. You Lost!' ;
            classToggle(userChoice, 'lose');
            computerScore++;
            updateScore();
            colorBorderImg('red', 'green');
            break;
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            result_div.textContent = userChoice.toUpperCase() + ' beat  ' + computerChoice.toUpperCase() + '. You Win!' ;
            classToggle(userChoice, 'win');
            userScore++;
            updateScore();
            colorBorderImg('green', 'red')
            break;
        default:
            result_div.textContent = userChoice.toUpperCase() + ' is equal to ' + computerChoice.toUpperCase() + ". It's a Draw!" ;
            classToggle(userChoice, 'draw');
            colorBorderImg('yellow','yellow')
            break;
    }
}


function main (){

rock_div.addEventListener('click',  () => game('rock')  )
paper_div.addEventListener('click',  () => game('paper') )
scissors_div.addEventListener('click',  () => game('scissors') )

}

main();

