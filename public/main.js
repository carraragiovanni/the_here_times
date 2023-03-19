$(function() {
    console.log("banana");
    getBrowserLocation();
    initMap();
});
let map;
let mapSettings = {};

function getBrowserLocation () {
    const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
    };

    function success(pos) {
    const crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`Accuracy: ${crd.accuracy}`);
    }

    function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}