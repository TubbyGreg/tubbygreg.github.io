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
    insta[0] = 'Assets/bewareofdog.jpg';
    insta[1] = 'Assets/blood.jpg';
    insta[2] = 'Assets/cathedral.jpg';
	insta[3] = 'Assets/djigby.jpg';
	insta[4] = 'Assets/elisha.jpg';
	insta[5] = 'Assets/teapot.jpg';
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