class Game {
    constructor() {

    }

    getState() {
        var gameStateRef = database.ref('gameState')

        gameStateRef.on("value", function (data) {
            gameState = data.val()
        })
    }
    update(state) {
        database.ref('/').update({
            gameState: state
        })

    }
    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }

            form = new Form()
            form.display()
            
            gamer1 = createSprite(100, 100, 30, 30);   
            gamer2 = createSprite(200, 200, 30, 30);
            gamer3 = createSprite(300, 300, 30, 30);
            gamer4 = createSprite(400, 400, 30, 30);

            ground = createSprite(958, 856, 1911, 1);
           // gamer5 = createSprite(500, 500, 30, 30);
           gamers = [gamer1, gamer2, gamer3, gamer4]


        }
    }

    play() {

        form.hide();
        textSize(30);
        text("GAME START", 120, 100);
        Player.getPlayerInfo();
        bg = bg3;
        background(bg);  

        if (allPlayers != undefined) {
            var index = 0;
            var x = 175; 
            var y = 0;
        
            for (var plr in allPlayers) {

               index=index + 1;
                x = allPlayers[plr].X
                y = allPlayers[plr].Y
               // console.log("Y" + allPlayers[plr].Y);
                gamers[index-1].x = allPlayers[plr].X;
                gamers[index-1].y = allPlayers[plr].Y;
                //console.log("Y"+gamers[index-1].y)
               // console.log("X"+gamers[index-1].x)

                if (index === 1){
      
                    gamers[index-1].addImage(monster);
                    gamers[index-1].x = allPlayers[plr].X+200;
                    gamers[index-1].y = allPlayers[plr].Y+200;

                }
                else if(index === player.index){
                    if (allPlayers[plr].state == "ice"){
                        gamers[index-1].addImage(meIce);
                     }   else if (allPlayers[plr].state == "water"){
                        gamers[index-1].addImage(meWater);
                     }
                    } else if (allPlayers[plr].state == "ice"){
                    gamers[index-1].addImage(ice);
                }else if (allPlayers[plr].state == "water"){
                    gamers[index-1].addImage(water);
                    
                }

            }

        }       
         if (keyIsDown(UP_ARROW) && player.index !== null && player.state == "water") {
            player.positionY = player.positionY - 10;
            player.updatePos();
            console.log("UP");
            //console.log(gamers[index-1].y)

        }         
        else if (keyIsDown(DOWN_ARROW) && player.index !== null && player.state == "water") {
           player.positionY = player.positionY + 10;
           player.updatePos();
           console.log("DOWN");

        }
        else if (keyIsDown(LEFT_ARROW) && player.index !== null && player.state == "water") {
            player.positionX = player.positionX - 10;
            player.updatePos();
            console.log("left")      

        }         
        else if (keyIsDown(RIGHT_ARROW) && player.index !== null && player.state == "water") {
           player.positionX = player.positionX + 10;
           player.updatePos();
           console.log("right")

        }

        if(gamer1.isTouching(gamers[player.index-1]) && player.state == "water"){
            gamers[player.index-1].shapeColor = "yellow";
            player.state = "ice";
            player.getIceCount();
            console.log(IceCount)
            IceCount = IceCount + 1;
            console.log(IceCount)
            player.updateIceCount();
            player.updatePos();
        }

        if(gamer4.isTouching(gamers[player.index-1]) && player.index != 1 && player.state == "ice" ){
            gamers[player.index-1].shapeColor = "blue";
            player.state = "water";
            player.updatePos();
            player.getIceCount();
            IceCount = IceCount - 1;
            player.updateIceCount();
        }
        if(gamer3.isTouching(gamers[player.index-1]) && player.index != 1 && player.state == "ice" ){
            gamers[player.index-1].shapeColor = "blue";
            player.state = "water";
            player.updatePos();   
            player.getIceCount();
            IceCount = IceCount - 1;
            player.updateIceCount();
        }
        if(gamer2.isTouching(gamers[player.index-1]) && player.index != 1 && player.state == "ice" ){
            gamers[player.index-1].shapeColor = "blue";
            player.state = "water";
            player.updatePos();
            player.getIceCount();
            IceCount = IceCount - 1;
            player.updateIceCount();
        }

        if(IceCount == 0){
            if(player.index != 1){
                text("GAME OVER", 500, 500)
                text("YOU WON", 600, 600)
            }else{
                text("GAME OVER", 500, 500)
                text("YOU LOSE", 600, 600)
            }
        }
     
        
        drawSprites();

    }
}

