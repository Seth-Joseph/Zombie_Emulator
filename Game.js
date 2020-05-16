class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
     p1 = createSprite(100,200);
      
      p2 = createSprite(300,200);
     
      p3 = createSprite(500,200);
    
      p4 = createSprite(700,200);
      
     ply = [p1,p2,p3,p4];
     p1.addImage("player1",p1Img);
     p2.addImage("player2",p2Img);
     p3.addImage("player3",p3Img);
     p4.addImage("player4",p4Img);
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        background(back);
        image(back, 0,-displayHeight*500,displayWidth, displayHeight*5);
        
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 175 ;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
         ply[index-1].x = x;
         ply[index-1].y = y;
         // console.log(index, player.index)
  
         
          if (index === player.index){
            stroke(10);
            fill("red");
            ellipse(x,y,60,60);
            ply[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y =ply[index-1].y;
          }
         
          
        }
  
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
  
      if(player.distance > 3860){
        gameState = 2;
      }
     
      drawSprites();
    }
  
    
  }
  