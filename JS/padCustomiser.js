window.onload = function(){
	pads();
}

var canvas, colour, button, label, size, save;
var my_context;
var lastX, lastY;
var mousePressed = false;
function pads(){
	console.log("pads fired")
	
	
	canvas = document.getElementById('padCanvas');
	canvas.width = 600;
	canvas.height = 600;
	my_context = canvas.getContext("2d");
	
	//save button
	save = document.getElementById('save');
	save.type = "button";
	save.text = "save";
	
	//clear button
	button = document.getElementById('clear');
	button.type = "button";
	button.text = "My Button";
	
	//colour pick
	colour = document.getElementById('colorPicker');
	colour.type = "color";
	colour.name = "colour";
	colour.value = "#000000";
	
	//size
	size = document.getElementById('size');
	size.type = "range";
	size.name = "size";
	size.value = "5";
	
	//load button
	load = document.getElementById("load");
	load.type = "button";
	load.text = "load";
	
	
	
	
	//Event Listeners
	canvas.addEventListener("mousedown",(function(e){
	mousePressed = true;
	console.log("draw funct called");
})
);
	canvas.addEventListener("touchstart",(function(e){
	mousePressed = true;
	console.log("draw funct called");
})
);

	
	canvas.addEventListener("mouseup",(function(e){
	mousePressed = false;
	console.log("draw funct stopped");
})
);
	canvas.addEventListener("touchend",(function(e){
	mousePressed = false;
	console.log("draw funct stopped");
})
);
	
	canvas.addEventListener("mouseleave",(function(e){
	mousePressed = false;
	console.log("left");
})
);
	
	canvas.addEventListener("mousemove",(function(e){
	Draw(e.clientX, e.clientY, mousePressed);
	console.log("moving on canvas");
})
);
	canvas.addEventListener("touchmove",(function(e){
	Draw(e.clientX, e.clientY, mousePressed);
	console.log("moving on canvas");
})
);

	
	canvas.addEventListener("click",(function(e){
	Draw(e.clientX, e.clientY, true);
	console.log("draw");
})
);
	
	canvas.addEventListener("mouseenter",(function(e){
	lastX = e.clientX - canvas.offsetLeft;
	lastY = e.clientY - canvas.offsetTop;
	console.log("enter");
})
);
	
	button.addEventListener("click",(function(e){
	my_context.clearRect(0, 0, my_context.canvas.width, my_context.canvas.height);
	console.log("cleared");
})
);
	save.addEventListener("click",(function(e){
	Save();
	console.log("saved");
})
);
	
	colour.addEventListener("click",(function(e){
	
	console.log("colour selected");
}

	
));
	load.addEventListener("click", (function(e){
		Load(); 
		console.log("Loaded")
}
));
}
function Draw(x, y, isDown) {
    if (isDown) {
        //check if image is to draw on canvas
		my_context.beginPath();
		my_context.strokeStyle = colour.value;
		my_context.lineWidth = size.value;
		my_context.lineJoin = "round";
		my_context.moveTo(lastX,lastY);
		my_context.lineTo(x-canvas.offsetLeft,y-canvas.offsetTop);
		my_context.closePath();
		my_context.stroke();
    }
	//must upate lastx and y to use for move to and line to
    lastX = x-canvas.offsetLeft;
    lastY = y-canvas.offsetTop;
}

function Save(){
	console.log(canvas.toDataURL());
	var image = canvas.toDataURL();

                var aLink = document.createElement('a');
                var evt = document.createEvent("HTMLEvents");
                localStorage.setItem("canvas", canvas.toDataURL())
				localStorage.setItem("colour", colour.value)
				localStorage.setItem("size", size.value)
}

function Load(){
	
		colour.value = localStorage.getItem("colour");
		size.value = localStorage.getItem("size");
		var image = new Image();
		image.src = localStorage.getItem("canvas");
		image.onload = function () {
			my_context.drawImage(image, 0, 0, canvas.width, canvas.height);
		console.log("load success");
}}

