// Click Box Project

let color = "blue"
let squareX = 0;
let squareY = 0;
let squareSize = 100;

function setup(){
    createCanvas(600, 600);
    background(30, 222, 232);
}

function draw(){
    square(squareX, squareY, squareSize);
    fill(color)
}

function mouseClicked(){
    let limit = dist(squareX + (squareSize/2), squareY + (squareSize/2), mouseX, mouseY);
    let maxDistance = (Math.sqrt(Math.pow(squareSize/2, 2) + Math.pow(squareSize/2, 2)))
    if (limit <= maxDistance){
        color = color === "blue" ? "red": "blue";
    }
}

function keyPressed(){
    if (keyCode === 32){
        color = color === "blue" ? "red": "blue";
    } 
}
