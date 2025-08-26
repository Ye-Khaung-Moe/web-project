// Still need to fix error

//board 
let blockSize = 25;
let rows = 20;
let cols = 20; 
let board;
let context; 

//snake head 
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

//velocity
let velocityX = 0;
let velocityY = 0;

//snakeBody
let snakeBody = []

//food 
let foodX;
let foodY;

//Gameover
let gameOver = false;

window.onload = function () {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize; 
    context = board.getContext("2d") //Used for drawing on the board 

    placeFood(); //Food location randomly
    document.addEventListener("keyup", changeDirection);
    //update();
    setInterval(update, 1000/10); //100 millisecond 
}

//Caluate Food location Randomly 
const placeFood = () => {
    // 0-1) x rows/cols => (0-19.999) => 0-19
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}

const update = () => {
    if(gameOver){
        return;
    }
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);
    
     if (snakeX == foodX && snakeY == foodY){
        snakeBody.push([snakeX, snakeY]);
        placeFood();
    }

    context.fillStyle = "lime";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    if (snakeBody.length){
        snakeBody[0] = [snakeX, snakeY]
    }
    
}

//Change Direction 
const changeDirection = (e) => {
    if(e.code == "ArrowUp" && velocityY != 1){
        velocityX = 0;
        velocityY = -1;
    }else if(e.code == "ArrowDown" && velocityY != -1){
        velocityX = 0;
        velocityY = 1;
    }else if(e.code == "ArrowLeft" && velocityX != 1){
        velocityX = -1;
        velocityY = 0;
    }else if(e.code == "ArrowRight" && velocityX != -1){
        velocityX = 1;
        velocityY = 0;
    }
}