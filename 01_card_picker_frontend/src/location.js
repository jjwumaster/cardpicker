class Location {
  static getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          // Location.getPosition(position)
          var latitude = position.coords.latitude
          var longitude = position.coords.longitude
          Adapter.saveLatLong([latitude, longitude], currentUser.id)
        })
    } else {
        alert("Geolocation is not supported by this browser.");
    }
  }

  // static getPosition(position) {
  //   let locationDisplay = document.getElementById('location-display')
  //   locationDisplay.innerHTML = "Lat/long: " + position.coords.latitude + ", "+ position.coords.longitude
  // }

}
