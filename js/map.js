function initMap() {
  var uluru = {lat: 34.869, lng: -111.760};
  var map = new google.maps.Map(document.getElementById("map-api"), {
    zoom: 9,
    center: {lat: 34.850, lng: -111.760},
    disableDefaultUI: true
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}