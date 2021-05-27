var hypnoticBall;
var database;


function setup(){
    createCanvas(500,500);
    database = firebase.database()
    hypnoticBall = createSprite(250,250,10,10);
    hypnoticBall.shapeColor = "red";
   var hypnoticBallPosition = database.ref('ball/position')
   hypnoticBallPosition.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
database.ref("ball/position").set({
"x" : pos.x+x,
"y" : pos.y+y

 })
    
}

function readPosition(data){
pos = data.val()
hypnoticBall.x = pos.x;
hypnoticBall.y = pos.y;


}
function showError(){
    console.log("error in read position");
}