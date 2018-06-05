
let map;
// let center = {lat:47.0865,lng:-1.2805};  //Clisson                   
let center = {lat:31.6295,lng:-7.9811};  //Burlington                  

function initMap(){
 // Map option
 let options = {
        		zoom:7,
        		center: center
  }
	map = new google.maps.Map(document.getElementById('map'), options);
	let marker = new google.maps.Marker({
        position:{lat:33.5731,lng:-7.5898},
        map:map,
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
      });

      var infoWindow = new google.maps.InfoWindow({
        content:'<h1>Stowe, VT</h1>'
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });

}

















//Google Maps API key = AIzaSyBFyC3jDrzJK-9cl0wuWZonC-JpwP5Gaho


