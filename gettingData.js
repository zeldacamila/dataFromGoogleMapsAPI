// Define the address you want to geocode
var address = "carrera 26b #74-44, Barranquilla, Colombia";

// Create a geocoder object
var geocoder = new google.maps.Geocoder();

// Call the geocode() method with the address and a callback function
geocoder.geocode({address: address}, function(results, status) {
  if (status === google.maps.GeocoderStatus.OK) {
    // Extract the latitude and longitude from the geocoding result
    var lat = results[0].geometry.location.lat();
    var lng = results[0].geometry.location.lng();

    // Do something with the latitude and longitude
    console.log("Latitude: " + lat);
    console.log("Longitude: " + lng);
  } else {
    console.error("Geocoding failed due to: " + status);
  }
});
