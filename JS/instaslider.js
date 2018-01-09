window.onload = function(){
	instagram()
}
function instagram(){
    console.log("Insta fired");
  
    mybutton = document.getElementById("mybutton");
        mybutton.addEventListener('click', nextClicked(), false);

    }
function nextClicked() {
    var insta = new Array();
    insta[0] = 'assets/bewareofdog.jpg';
    insta[1] = 'assets/blood.jpg';
    insta[2] = 'assets/cathedral.jpg';
	insta[3] = 'assets/djigby.jpg';
	insta[4] = 'assets/elisha.jpg';
	insta[5] = 'assets/teapot.jpg';
    console.log("Next Clicked!");
 
        var counter = 0;
        return function (event) {
            counter++;
            gallery = document.getElementById("instagallery");
			gallery.style='opacity:0; transition: opacity 2s';
            gallery.src = insta[counter % insta.length];
			gallery.style.opacity='1';
        }
}