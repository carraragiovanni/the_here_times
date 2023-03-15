let map;

// Shorthand for $( document ).ready()
$(function() {
    console.log( "banana");
    initMap();
});

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}