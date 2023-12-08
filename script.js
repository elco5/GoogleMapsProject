function initMap() {
    // Initialize the map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: {lat: 41.9028, lng: 12.4964} // Adjust the center as needed for your GeoJSON data
    });
    // Load GeoJSON data from an external file
    map.data.loadGeoJson('asia.geo.json');

    // Style the GeoJSON features
    map.data.setStyle({
        fillColor: 'blue',
        strokeWeight: 2
    });

    // Create an info window
    var infoWindow = new google.maps.InfoWindow();

    // Add click listener to the features
    map.data.addListener('click', function(event) {
        // Content for the info window
        var myHTML = event.feature.getProperty("name");      
        
        // Set the content of the info window
        infoWindow.setContent("<div style='width:150px; text-align: center;'>" + myHTML  + "</div>");
        
        // Position the info window at the clicked feature
        infoWindow.setPosition(event.latLng);
        
        // Open the info window
        infoWindow.open(map);
    });

}

// Load the map
window.initMap = initMap;
