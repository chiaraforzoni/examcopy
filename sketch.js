var pointillismAreaHeight = 300,
    points = [],
    xPosCorrectionScale = 1,
    pointSizeRange = [5, 10];

var t;
var moon;
var bombs = [],
    bombSpeed = 8,
    xPosCorrectionScale = 1;
var s = second();
var clicks = 0;


//var skylineHeight = windowHeight/2-40;
//var newSHeight = windowWidth*1530/2048;
//per cercare di non scrivere ogni volta la formula sulle stringhe di comando dello skyline ma se la applico non funziona//windowWidth*1530/2048

function preload() {
dresda = loadImage("assets/citta.png");
dresda2 = loadImage("assets/citta2.png");
dresda3 = loadImage("assets/citta3.png");
dresda4 = loadImage("assets/citta4.png");
dresda5 = loadImage("assets/citta5.png");
dresda6 = loadImage("assets/citta6.png");
dresda7 = loadImage("assets/citta7.png");
moon = loadImage("assets/moon.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
 initWidth = windowWidth;
    }


function draw() {

imageMode(CENTER);

    //image(dresda, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
    
    if(bombs.length < 100) {
        //backgroundImage(dresda)
        image(dresda, windowWidth/2, windowHeight/2, windowWidth, windowWidth*1530/2048);

    }
  if( bombs.length > 100 ) {
        //backgroundImage(dresda)
        image(dresda2, windowWidth/2, windowHeight/2,windowWidth, windowWidth*1530/2048)
        
    }
    if(bombs.length > 200) {
        //backgroundImage(dresda)
        image(dresda3, windowWidth/2, windowHeight/2,windowWidth, windowWidth*1530/2048);
    }
    if(bombs.length > 300) {
        //backgroundImage(dresda)
        image(dresda4, windowWidth/2, windowHeight/2,windowWidth, windowWidth*1530/2048);
    }
    if(bombs.length > 400) {
        //backgroundImage(dresda)
        image(dresda5, windowWidth/2, windowHeight/2,windowWidth, windowWidth*1530/2048);
    }
     if(bombs.length > 500) {
        //backgroundImage(dresda)
        image(dresda6, windowWidth/2, windowHeight/2,windowWidth, windowWidth*1530/2048);
    }   
    if(bombs.length > 600) {
        //backgroundImage(dresda)
        image(dresda7, windowWidth/2, windowHeight/2,windowWidth, windowWidth*1530/2048);
    }
    
    //bombs
    //iterate on the array
    
    
  //IL TUO CODICE PER LE BOMBE
    
//  for(var i=0; i< bombs.length; i++) {
//    // Increase the single bomb y position
//    bombs[i].y+=5;
//    
//    // Create a new ellipse using the x and y properties of the bomb object
//    ellipse(bombs[i].x, bombs[i].y, 4,10);
//    
//  if (bombs[i].y > height- pointillismAreaHeight) { 
//    fill(255,0,0)
//    noStroke();
//    ellipse(bombs[i].x, windowHeight, bombs[i].size);
//    //bombs.splice(i,7);
//    
//   } else {
//        fill(bombs[i].color),
//        noStroke();
//        
//      }
//  }
    
 //IL MIO CODICE PER LE BOMBE
    
    for (var i = 0; i < bombs.length; i++) {
        if (bombs[i].y > height - pointillismAreaHeight) {
            var bomb = bombs[i];
            
            if (!points[i]) {
                points[i] = {
                    x: random(0, width),
                    y: random(height - pointillismAreaHeight, height),
                    size: random(pointSizeRange[0], pointSizeRange[1]),
                    color: "255",
                }
            }

            fill(bomb.color);
            noStroke();
            ellipse(bomb.x * xPosCorrectionScale, height - pointillismAreaHeight, bomb.size);
        } else {
            /** bomb on the fly */
            fill('#A51800');
            noStroke();
            ellipse(bombs[i].x * xPosCorrectionScale, bombs[i].y,10);
            bombs[i].y += bombSpeed;
        }
    }
    
    
if (!points[i]) {
                points[i] = {
                    x: random(0, width),
                    y: random(height - pointillismAreaHeight, height),
                    size: random(pointSizeRange[1], pointSizeRange[2]),
                    color: "255",
                }
            }
    
var s = second() + 3
image(moon,  width/6 + s, height/3 - s, 70, 70);


  noStroke();
  fill(255);
  textSize(20);
  text("Victims",1340 , 80);
  textSize(18);
 
  
    
  noStroke();
  fill(255);
  textSize(20);
  text("Time",1335,50);
  textSize(18);
  text(s,1310,50);

//schermata finale dopo 650 bombe (da eliminare)
//if (bombs.length > 650) {
//        noStroke();
//        fill(0, 0, 0);
//        rect(0, 0, windowWidth, windowHeight);
//        textSize(32);
//        fill(250);
//        textAlign(CENTER);
//        text("Remember dresda", windowWidth / 2, windowHeight / 2);
//    }

  //text(frameCount, width/2, height/2);
    if (frameCount > 1500){ //cambiare il 100
        fill(5);
        noStroke();
        rect(0, 0, windowWidth, windowHeight);
        textSize(62);
    fill(255);
    textAlign(CENTER);
    text("REMEMBER DRESDA", width/2, height/2);
    t(0 ,1);
    }  
    drawPointillism();
}

function mousePressed() {
  //add 1 to variable clicks
  clicks ++;
}


function mouseReleased() {
  var newx = random()*width;
  var newSize = random(3,8);
  var newColor;
    var myRandom = random(0,1);
    if (myRandom <= 0.5) {
        newColor = color('#E52B50');
    } else {
        newColor = color('#A51800');
    }
    var obj = {x: newx, y: 0, size: newSize, color: newColor};
    bombs.push(obj);

    if (bombs.length > maxBombsCount) {
        bombs.shift();
    }

}

function drawPointillism() {
    // draw rect
    noStroke();
    fill(15);
    rect(0, height - pointillismAreaHeight, width, pointillismAreaHeight);

    // draw point
    for (var i in points) {
        var point = points[i];
        fill(80);
        noStroke();
        ellipse(point.x * xPosCorrectionScale, point.y, point.size);
    }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  xPosCorrectionScale = windowWidth / initWidth;
  }



    