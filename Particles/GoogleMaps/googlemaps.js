/*global google*/
/*global LatLng*/
/*global zoom*/
/*global sw*/
function initMap() {

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('gp-googlemaps'), {
    center: LatLng,
    scrollwheel: sw,
    zoom: zoom
  });

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: LatLng,
  });
}
google.maps.event.addDomListener(window, 'load', initMap);