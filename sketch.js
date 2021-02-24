var canvas;
var music;
var ball;
var block2;
var surface1, surface3, surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);

    //create 4 different surfaces
 surface1 = createSprite(80, 580, 150, 30);
 surface1.shapeColor = "green";

 surface3 = createSprite(370, 580, 150, 30);
 surface3.shapeColor = "brown";

 surface4 = createSprite(520, 580, 150, 30);
 surface4.shapeColor = "yellow";
 
 block2 = createSprite(220, 580, 150, 30);
 block2.shapeColor = "blue";

    //create box sprite and give velocity
    ball = createSprite(random(30, 570), 30, 25, 25);
    ball.shapeColor = "red";
    ball.velocityX = 5;
    ball.velocityY = 5;
}

function draw() {

music.play();

    background(rgb(169,169,169));

    //create edgeSprites();
edges = createEdgeSprites();
ball.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(ball) && ball.bounceOff(surface1)){
        ball.shapeColor = "blue";
        surface1.shapeColor = "red";
    }

    if(surface3.isTouching(ball) && ball.bounceOff(surface3)){
        ball.shapeColor = "red";
        surface3.shapeColor = "blue";
    }

    if(surface4.isTouching(ball) && ball.bounceOff(surface1)){
        ball.shapeColor = "green";
        surface4.shapeColor = "red";
    }

    if(block2.isTouching(ball)){
        ball.collide(block2);
        ball.shapeColor = rgb(255, 128, 0);
        ball.velocityX = 0;
        music.stop();
    }

    drawSprites();
}