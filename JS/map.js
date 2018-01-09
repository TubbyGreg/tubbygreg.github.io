window.onload = function(){
	map();
}
function map() {
	console.log("Map Fired");
    var maploc = {
        center: new google.maps.LatLng(53.2211221,-0.5371431),
        zoom: 17,
    };
    var map = new google.maps.Map(document.getElementById("Map"), maploc);
}