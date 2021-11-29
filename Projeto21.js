var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, arestas;
var music;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    tela = createTela(800,600);

    bloco1 = createSprite(0,580,360,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(295,580,200,30);
    bloco2.shapeColor = "orange";

    bloco3 = createSprite(295,580,160,30);
    bloco3.shapeColor = "red";

    bloco4 = createSprite(295,580,20,30);
    bloco4.shapeColor = "yellow";

    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
    bola.velocityX = 2;
    bola.velocityY = -2
    

}

function draw() {
    background(rgb(169,169,169));
    arestas=createArestasprites();
    bola.bounceOff(arestas);

    
    
    if(bloco1.isTouching(bola) && bola.bounceOff(bloco1)){
        bola.shapeColor = "blue";
        music.play();
        bola.velocityX = 0;
        bola.velocityY = 0;
    }


    if(bloco2.isTouching(bola)&& bola.bounceOff(bloco2)){
        bola.shapeColor = "orange";
        music.play();
        bola.velocityX = 0;
        bola.velocityY = 0;
    }

    
    if(bloco3.isTouching(bola)&& bola.bounceOff(bloco3)){
        bola.shapeColor = "red";
        music.play();
        bola.velocityX = 0;
        bola.velocityY = 0;
    }


    if(bloco4.isTouching(bola)&& bola.bounceOff(bloco4)){
        bola.shapeColor = "yelloow";
        music.play();
        bola.velocityX = 0;
        bola.velocityY = 0;
    }


    drawSprites();
}