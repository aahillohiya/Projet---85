canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

greencar_height = 100; 
greencar_Width = 75;

B_image = "parkingLot.jpg";
Greencar_image = "car2.png";

X_coords = 5; 
Y_coords = 255;

function add() {
	b_imgTag = new Image();
    b_imgTag.onload = uploadBackground;
    b_imgTag.src = B_image;

    greencar_imgTag = new Image();
    greencar_imgTag.onload = uploadgreencar;
    greencar_imgTag.src = Greencar_image;
}

function uploadBackground() {
    ctx.drawImage(b_imgTag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, X_coords, Y_coords, greencar_Width, greencar_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
    if (Y_coords >= 0){
        Y_coords = Y_coords - 10;
        uploadBackground();
        uploadgreencar();
       console.log("When up arrow is pressed, x = " + X_coords + " | y = " +Y_coords);
    }
}

function down()
{
	if (Y_coords <= 500){
        Y_coords = Y_coords + 10;
        uploadBackground();
        uploadgreencar();
        console.log("When down arrow is pressed, x = " + X_coords + " | y = " +Y_coords);
    }}

function left()
{
	 if (X_coords >= 0){
        X_coords = X_coords - 10;
        uploadBackground();
        uploadgreencar();
        console.log("When left arrow is pressed, x = " + X_coords + " | y = " +Y_coords);
    }
}

function right()
{
	 if (X_coords <= 700){
        X_coords = X_coords + 10;
        uploadBackground();
        uploadgreencar();
        console.log("When right arrow is pressed, x = " + X_coords + " | y = " +Y_coords);
    }
}
