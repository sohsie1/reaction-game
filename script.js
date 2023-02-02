let playerScore = 0;
let compScore = 0;
const playerScore_span = document.getElementById("playerScore");
const compScore_span = document.getElementById("compScore");
const scoreboard_div = document.querySelector(".scoreboard");
const finalResult_p = document.querySelector(".finalResult > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");



function getCompScore() {
    const images = ['r', 'p', 's'];
    let randomNumber = (Math.floor(Math.random() * 4)); //.floor rounds the decimal number up
    return images[randomNumber];
}
console.log(getCompScore()); //gives random element from choices array for the Computer



function win() { //what will print on webpage
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    compScore_span.innerHTML = compScore;
    finalResult_p.innerHTML = "You win!"
}



function lost() {
    compScore++;
    playerScore_span.innerHTML = playerScore;
    compScore_span.innerHTML = compScore;
    finalResult_p.innerHTML = "Oh no, you lost. Try again!"
}



function draw() {
    finalResult_p.innerHTML = "It's a tie! Try again. "
}



function game (playerScore) { //gives random Computer element after Player chooses an option
    const compResult = getCompScore();

    if (playerScore == (compResult)) {
        draw(); //console.log("It's a tie! Try again.");
       
    } else if (playerScore == ('r')) {
        if (compResult == 'p') {
            lost(); 
            console.log("You lost.");
        }
        if (compResult == 's') {
            win();
            console.log("You win.")
        }
        
    } else if (playerScore == ('p')) {
        if (compResult == ('s')) {
            lost(); 
            console.log("You lost.");
        }
        if (compResult == 'r') {
            win();
            console.log("You win.")
        }
    
    } else if (playerScore == ('s')) {
        if (compResult == ('p')) {
            win(); 
            console.log("You win.");
        }
        
        if (compResult == 'r') {
            lost(); 
            console.log("You lost.")
        }
        
    }
} 



function rockPaperScissors() { //clickable buttons
    rock_div.addEventListener('click', function () {
        game("r")
    })

    paper_div.addEventListener('click', function () {
        game("p")
    })

    scissors_div.addEventListener('click', function () {
        game("s")
    })
}

rockPaperScissors();