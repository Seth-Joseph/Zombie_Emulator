var ply;
var canvas;

var playerCount;
var allPlayers;
var database;

var form,player,game;

var p1,p2,p3,p4;
var bg;

var song;
var back
var p1Img,p2Img,p3Img,p4Img
var zombie,zombieimg;

var distance = 0;

var gameState = 0;

function preload(){
  p1Img = loadImage('player1.png');
    p2Img = loadImage('player2.png');
    p3Img = loadImage('player3.png');
    p4Img = loadImage('player4.png');

    zombieimg = loadAnimation('zo.gif')
    
    //bg = loadImage("zw.png");
    //song = loadSound('songs/Anjaam Pathira.mp3');
    
   back = loadImage("Ground.png");
   bg = loadImage("scary.jpg")
}





function setup(){
canvas =  createCanvas(displayWidth-20,displayHeight-30);
database = firebase.database();
game = new Game();
game.getState();
game.start();   


}

function draw(){
  // playSound();
 if(playerCount === 4){
     game.update(1);
 }  
 if(gameState === 1){
     clear();
     game.play();
 }
     if(gameState === 2){
         game.end();
     }
    
 
}