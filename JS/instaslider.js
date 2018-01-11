//wait until page is loaded to run the JS
window.onload = function(){
	instagram()
}
//this is the main function
function instagram(){
    console.log("Insta fired");
//event listener for user clicking on the arrow
    mybutton = document.getElementById("mybutton");
        mybutton.addEventListener('click', nextClicked(), false);

    }
function nextClicked() {
	//array of the pictures the slider will display
    var insta = new Array();
    insta[0] = 'Assets/bewareofdog.jpg';
    insta[1] = 'Assets/blood.jpg';
    insta[2] = 'Assets/cathedral.jpg';
	insta[3] = 'Assets/djigby.jpg';
	insta[4] = 'Assets/elisha.jpg';
	insta[5] = 'Assets/teapot.jpg';
    console.log("Next Clicked!");
		//goes throught the images
        var counter = 0;
        return function (event) {
            counter++;
            gallery = document.getElementById("instagallery");
			gallery.style='opacity:0; transition: opacity 2s';
            gallery.src = insta[counter % insta.length];
			gallery.style.opacity='1';
        }
}