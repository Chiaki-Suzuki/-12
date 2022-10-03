jQuery(document).ready(function($){
  function map_initialize() {
    var latlng = new google.maps.LatLng(42.674549,140.085405);
    var map = new google.maps.Map(
      document.getElementById("g_map"),
      {
        zoom: 16,
        center: latlng
      }
    );
  var marker = new google.maps.Marker({
       position: latlng,
       map: map,
  });
    google.maps.event.addDomListener(window, "resize", function() {
   var center = map.getCenter();
   google.maps.event.trigger(map, "resize");
   map.setCenter(center);
  });
  }
  map_initialize();
});
