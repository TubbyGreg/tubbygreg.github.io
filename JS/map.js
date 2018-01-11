//wiat until page is loaded to run js
window.onload = function(){
	map();
}
//map function
function map() {
	console.log("Map Fired");
    var maploc = {
        center: new google.maps.LatLng(53.2211221,-0.5371431),
        zoom: 17,
    };
    var map = new google.maps.Map(document.getElementById("Map"), maploc);
}