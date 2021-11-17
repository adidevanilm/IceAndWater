class Form {
    constructor() {
        this.inputName = createInput("ENTER YOUR NAME");
        this.inputId   = createInput("ENTER SQUAD ID");
        this.inputPass = createInput("ENTER PASSWORD");

        this.button = createButton('Play');
        this.greeting = createElement('h4');
        this.title = createElement("h1")
        this.reset = createButton('RESET');


    }

    hide() {

        this.greeting.hide();
        this.button.hide();
        this.inputName.hide();
        this.inputId.hide();
        this.inputPass.hide();

        this.title.hide();
    }

    display() {
        this.title.html('SHOOT OUT')
        this.title.position(displayWidth/2-45, 0)

        this.inputName.position(displayWidth/2-40, displayHeight/2-140);
        this.inputId.position(displayWidth/2-40,displayHeight/2-100);
        this.inputPass.position(displayWidth/2-40, displayHeight/2-60);

        this.button.position(displayWidth/2+30, displayHeight/2);
        this.reset.position(displayWidth-100, 20);

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            IceCount = -3;
            player.updateIceCount();
            game.update(0);
        }
        )
        this.button.mousePressed(()=>{
            player.getCount();
            this.inputName.hide();           
            this.inputId.hide();
            this.inputPass.hide();
            bg = bg2;
            this.title.position(displayWidth/2-130, 250)

             // game.getState();
            //game.start();
            this.button.hide();
            player.name = this.inputName.value();
            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("HELLO " + player.name.toUpperCase());
            this.greeting.position(displayWidth/2-80, displayHeight/4+128);
        })
    }
}