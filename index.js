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
  riskLevel();
  
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
//draw the polygon depending of the section where the user is.
function drawPolygon(sect,color){

  const polygon = [
    { lat: 19.495688, lng: -99.138939 }, // 1
    { lat: 19.494266, lng: -99.132884 }, // 2
    { lat: 19.490670, lng: -99.133549 }, // 3
    { lat: 19.492133, lng: -99.139716 } // 4
  ];
  // Construct the polygon.
  if(sect==1)
  {
  const section1 = new google.maps.Polygon({
    paths: polygon,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: color,
    fillOpacity: 0.35,
  });
  section1.setMap(map);
}

  const polygon2=[
    { lat: 19.494218, lng: -99.132867 }, //1
    { lat: 19.493999, lng: -99.131514 },
    { lat: 19.491723, lng: -99.128426 },
    { lat: 19.489607, lng: -99.130146 },
    { lat: 19.490745, lng: -99.133444 } //5
  ];

if(sect==2)
{
const section2 = new google.maps.Polygon({
  paths: polygon2,
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: color,
  fillOpacity: 0.35,
});
section2.setMap(map);
}

const polygon3 = [
  { lat: 19.491732, lng: -99.128410 },
  { lat: 19.488323, lng: -99.123796 },
  { lat: 19.487475, lng: -99.124470 },
  { lat: 19.489610, lng: -99.130157 }
]

if(sect==3)
{
const section3 = new google.maps.Polygon({
  paths: polygon3,
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: color,
  fillOpacity: 0.35,
});
section3.setMap(map);
}
const polygon4 = [
  { lat: 19.488917, lng: -99.128591 },
  { lat: 19.487395, lng: -99.124526 },
  { lat: 19.484322, lng: -99.127099 },
  { lat: 19.486658, lng: -99.130299 }
]

if(sect==4)
{
const section4 = new google.maps.Polygon({
  paths: polygon4,
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: color,
  fillOpacity: 0.35,
});
section4.setMap(map);
}
const polygon5 = [
  { lat: 19.490654, lng: -99.133425 },
  { lat: 19.488892, lng: -99.128613 },
  { lat: 19.486895, lng: -99.130229 },
  { lat: 19.487735, lng: -99.134018 }
]

if(sect==5)
{
const section5 = new google.maps.Polygon({
  paths: polygon5,
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: color,
  fillOpacity: 0.35,
});
section5.setMap(map);
}
const polygon6 = [
  { lat: 19.491226, lng: -99.135597 },
  { lat: 19.490754, lng: -99.133579 },
  { lat: 19.484966, lng: -99.134635 },
  { lat: 19.485347, lng: -99.136654 }
]

if(sect==6)
{
const section6 = new google.maps.Polygon({
  paths: polygon6,
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: color,
  fillOpacity: 0.35,
});
section6.setMap(map);
}
  
}
//set the color depending of de risk level
function riskLevel()
{
  let factor = 1.5;
  let sect = 6;
  let color = "#000000";//default color black
  let bajo = "#5D7837"; 
  let medio = "#FFC012";
  let alto = "#F32121";
  let extremo = "#730909";
  
  if (factor <= 3.5){
    if (factor <= 2.5){
      if (factor <= 1.5){
        color = bajo;
      }
      else{
        color = medio;
      }
    }
    else{
       color = alto;
    }  
   }
  else{
    color = extremo;
  }
  drawPolygon(sect,color);
}

//funciton setSection(){}
//function setFactor(){}
window.initMap = initMap;