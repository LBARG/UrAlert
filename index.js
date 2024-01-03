/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 19.4921, lng: -99.1289 },
    zoom: 18,
  });

  infoWindow = new google.maps.InfoWindow();
  const locationButton = document.createElement("button");
  drawPolygon();
  
  locationButton.textContent = "Ir a tu ubicación";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(
    locationButton
  );
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Estas Aquí");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

function drawPolygon(){
  const polygon = [
    {lat: 19.485263, lng: -99.136557}, ///esq sur izq
          {lat: 19.484954, lng: -99.134699}, ///esq sur der
          {lat: 19.487714, lng: -99.134112}, ///esq centro der
          {lat: 19.486991, lng: -99.130812}, ///centro der
      {lat: 19.494001, lng: -99.131534}, ///sup centro
      {lat: 19.491293, lng: -99.135630}
  ];
  // Construct the polygon.
  const section1 = new google.maps.Polygon({
    paths: polygon,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  const polygon2=[{lat: 19.486991, lng: -99.130812}, ///centro der
  {lat: 19.483943, lng: -99.126536}, ///esq der inf
  {lat: 19.487888, lng: -99.123247}, ///esq der sup
  {lat: 19.494001, lng: -99.131534}, ///sup centro
];

const section2 = new google.maps.Polygon({
  paths: polygon2,
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
});

const polygon3 = [
  {lat: 19.494001, lng: -99.131534}, ///sup centro
  {lat: 19.495641, lng: -99.138995}, /// esq izq sup
  {lat: 19.492106, lng: -99.139693}, /// esq izq inf
  {lat: 19.491293, lng: -99.135630}
]
const section3 = new google.maps.Polygon({
  paths: polygon3,
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
});

  section1.setMap(map);
  section2.setMap(map);
  section3.setMap(map);
}

window.initMap = initMap;