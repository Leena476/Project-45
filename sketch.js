var gameState = "start";

function preload(){
	battlefieldLongerBg = loadImage("battlefield_longer_bg.png");
	battlefieldLongBg = loadImage("battlefield_long_bg.png");
	battlefieldMediumBg = loadImage("battlefield_medium_bg.png");
	storyBg = loadImage("story_bg.png");
	redButtonImg = loadImage("red_button.png");
	greenButtonImg = loadImage("green_button.png");
	yellowButtonImg = loadImage("yellow_button.png");
	warBg = loadImage("war_bg.jpeg");
	easyPreview = loadImage("easy_preview.png");
	mediumPreview = loadImage("medium_preview.png");
	hardPreview = loadImage("hard_preview.png");
}

function setup() {
	createCanvas(1400,800);
}

function draw() {
  
  if(gameState === "start"){
	background(storyBg);
	
	textSize(67);
	textFont("Georgia");
	stroke(random(0,255),random(0,255),random(0,255));
	strokeWeight(7);
	fill(255);
	text("A Battle Above the Field",10,100);

	if(keyDown("space")){
		gameState = "choose";
	}
	
  }

  if(gameState === "choose"){
	  background(warBg);
	  textSize(67);
	  textFont("Georgia");
	  stroke(random(0,255),random(0,255),random(0,255));
  	  strokeWeight(7);
	  fill(255);
	  text("Choose the level of difficulty:",250,200);
	  
	  image(greenButtonImg,150,300,250,250);
	  textSize(42);
	  stroke("darkgreen");
	  strokeWeight(10);
	  fill("lightgreen");
	  text("Easy",230,425);

	  image(yellowButtonImg,550,300,250,250);
	  stroke("orange");
	  strokeWeight(10);
	  fill("yellow");
	  text("Medium",597.5,425);

	  image(redButtonImg,950,300,250,250);
	  stroke("maroon");
	  strokeWeight(10);
	  fill("lightpink");
	  text("Hard",1025,425);

	  console.log(mouseX,mouseY);

	  if(mouseX <= 375 && mouseX >= 175 && mouseY >= 315 && mouseY <= 515){
		image(easyPreview,130,530,300,250);
		easyInvisible = createSprite(275,410,150,150);
		easyInvisible.visible = false;
		if(mousePressedOver(easyInvisible)){
			gameState = "easyPlay";
		}
	  }
	  if(mouseX >= 575 && mouseX <= 775 && mouseY >= 315 && mouseY <= 515){
		image(mediumPreview,520,530,300,250);
		mediumInvisible = createSprite(675,410,150,150);
		mediumInvisible.visible = false;
		if(mousePressedOver(mediumInvisible)){
			gameState = "mediumPlay";
		}
	  }
	  if(mouseX >= 975 && mouseX <= 1175 && mouseY >= 315 && mouseY <= 515){
		image(hardPreview,920,530,300,250);
		hardInvisible = createSprite(1075,410,150,150);
		hardInvisible.visible = false;
		if(mousePressedOver(hardInvisible)){
			gameState = "hardPlay";
		}
	  }
	  
  }

  if(gameState === "easyPlay"){
	background(0);
  }

  if(gameState === "mediumPlay"){
	background(0);
  }

  if(gameState === "hardPlay"){
	background(0);
  }
  
  drawSprites();
  
}