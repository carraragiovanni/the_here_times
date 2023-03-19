async function initMap() {
    let options = {
        // zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        // center: {
        //     lat: parseFloat(localStorage.getItem('lat')),
        //     lng: parseFloat(localStorage.getItem('lng'))
        // },
        zoom: 8,
    }

    map = await new google.maps.Map($('#map')[0], options);

    // map.addListener('idle', function () {
    //     updateBounds();
    //     mapIdle();
    // });
    
    // infoWindow = new google.maps.InfoWindow();
}