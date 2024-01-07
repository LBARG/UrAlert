function initMap() {

  var position = new google.maps.LatLng(19.493467, -99.136196);
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 19.4921, lng: -99.1289},
      zoom: 16,
    });
    const polyCoords = [
      { lat: 19.495688, lng: -99.138939 }, // 1
      { lat: 19.494266, lng: -99.132884 }, // 2
      { lat: 19.490670, lng: -99.133549 }, // 3
      { lat: 19.492133, lng: -99.139716 } // 4
  ];
  const section1 = new google.maps.Polygon({
      paths: polyCoords,
    });
    google.maps.event.addListener(map, "click", (e) => {
      let message = google.maps.geometry.poly.containsLocation(position,section1)
      ?
        "Estas dentro de la sección 1"
      : "Estas fuera del área de cobertura";
  
      alert(message);
    });
       
      
  }

  
  window.initMap = initMap;