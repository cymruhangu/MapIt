  let geocoder;
  let map;
  function initialize() {
    geocoder = new google.maps.Geocoder();
    let latlng = new google.maps.LatLng(32.7157, -117.1611);
    let mapOptions = {
      zoom: 14,
      center: latlng
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

  function codeAddress() {
    let address = document.getElementById('address').value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        let marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
        let infoWindow = new google.maps.InfoWindow({
        content:'<a href="http://www.smokejazz.com">Smoke Jazz</a>'
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

// <body onload="initialize()">
//  <div id="map" style="width: 320px; height: 480px;"></div>
//   <div>
//     <input id="address" type="textbox" value="Sydney, NSW">
//     <input type="button" value="Encode" onclick="codeAddress()">
//   </div>
// </body>