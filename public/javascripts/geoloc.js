const getLocation = () => {
  navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    console.log("lat lng", lat, lng);
    localStorage.setItem("lat", lat);
    localStorage.setItem("lng", lng);
    console.log("localStor lat", localStorage.getItem("lat"));
    console.log("localStor lng", localStorage.getItem("lng"));
    if (document.getElementById("lat")) {
      document.getElementById("lat").value = localStorage.getItem("lat");
    }
    if (document.getElementById("lng")) {
      document.getElementById("lng").value = localStorage.getItem("lng");
    }
  });
};
