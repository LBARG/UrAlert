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
  //riskLevel();
  
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
          containsLoc(pos);
          infoWindow.open(map);
          map.setCenter(pos);
          //setTimeout(() => {
            //window.location.reload();
        //}, "5000");
        
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
const escomPolygon = [
{lat:19.503976, lng:-99.148085},
{lat:19.503185, lng:-99.146455},
{lat:19.505344, lng:-99.145352},
{lat:19.506212, lng:-99.146695}
];
  // Construct the polygon.
if(sect == 7){
  const sectionE = new google.maps.Polygon({
    paths: escomPolygon,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: color,
    fillOpacity: 0.35,
  });
  sectionE.setMap(map);
}
}
//set the color depending of de risk level
function riskLevel(sect)
{
  let factor = getFactor(sect);
  let color = "#000000";//default color black
  let bajo = "#5D7837"; 
  let medio = "#FFC012";
  let alto = "#F32121";
  let extremo = "#730909";
  
  if (factor <= 2.70){
    if (factor <= 2.35){
      if (factor <= 2.15){
        color = bajo;
        alert("!El reisgo de tu ubicación actual es bajo!");
      }
      else{
        color = medio;
        alert("!El reisgo de tu ubicación actual es medio!");
      }
    }
    else{
       color = alto;
       alert("!El reisgo de tu ubicación actual es alto!");
    }  
   }
  else{
    color = extremo;
    alert("!El reisgo de tu ubicación actual es muy alto!");
  }
  drawPolygon(sect,color);
}

function getFactor(sect)
{
  if(sect != 1)
  {
    if(sect != 2)
    {
      if (sect != 3)
      {
        if (sect != 4)
        {
          if (sect != 5)
          {
            return 2.38//factor de riesgo seccion 6
          }
          else
          {
            return 2.73//factor de riesgo seccion 5
          }
        }
        else
        {
          return 2.15//factor de reisgo seccion 4
        }
      }
      else
      {
        return 2.11//factor de reisgo de seccion 3
      }
    }
    else
    {
      return 3//factor de riesgo de seccion 2
    }
  }
  else
  {
    return 2.11//factor de riesgo de sección 1
  }
}

function containsLoc(pos)
{
  let sect = 0;
  //var pos = new google.maps.LatLng(19.504998, -99.146369);
  const polyCoords = [
    { lat: 19.495688, lng: -99.138939 }, // 1
    { lat: 19.494266, lng: -99.132884 }, // 2
    { lat: 19.490670, lng: -99.133549 }, // 3
    { lat: 19.492133, lng: -99.139716 } // 4
];
const section1 = new google.maps.Polygon({
    paths: polyCoords,
  });
  const polygon2=[
    { lat: 19.494218, lng: -99.132867 }, //1
    { lat: 19.493999, lng: -99.131514 },
    { lat: 19.491723, lng: -99.128426 },
    { lat: 19.489607, lng: -99.130146 },
    { lat: 19.490745, lng: -99.133444 } //5
  ];
  const section2 = new google.maps.Polygon({
    paths: polygon2,
  });
  const polygon3=[
    { lat: 19.491732, lng: -99.128410 },
  { lat: 19.488323, lng: -99.123796 },
  { lat: 19.487475, lng: -99.124470 },
  { lat: 19.489610, lng: -99.130157 }
  ];
  const section3 = new google.maps.Polygon({
    paths: polygon3,
  });
  const polygon4=[
    { lat: 19.488917, lng: -99.128591 },
    { lat: 19.487395, lng: -99.124526 },
    { lat: 19.484322, lng: -99.127099 },
    { lat: 19.486658, lng: -99.130299 }
  ];
  const section4 = new google.maps.Polygon({
    paths: polygon4,
  });
  const polygon5=[
    { lat: 19.490654, lng: -99.133425 },
  { lat: 19.488892, lng: -99.128613 },
  { lat: 19.486895, lng: -99.130229 },
  { lat: 19.487735, lng: -99.134018 }
  ];
  const section5 = new google.maps.Polygon({
    paths: polygon5,
  });
  const polygon6=[
    { lat: 19.491226, lng: -99.135597 },
  { lat: 19.490754, lng: -99.133579 },
  { lat: 19.484966, lng: -99.134635 },
  { lat: 19.485347, lng: -99.136654 }
  ];
  const section6 = new google.maps.Polygon({
    paths: polygon6,
  });
  const escomPolygon = [
{lat:19.503976, lng:-99.148085},
{lat:19.503185, lng:-99.146455},
{lat:19.505344, lng:-99.145352},
{lat:19.506212, lng:-99.146695}
];
  // Construct the polygon.
  const sectionE = new google.maps.Polygon({
    paths: escomPolygon,
  });
  //google.maps.event.addListener(map, "click", (e) => {
    let message = "Error fatal no se pudo encontrar la sección";
    google.maps.geometry.poly.containsLocation(pos,section1)
    ?
    (message = "Estas dentro de la sección 1", sect = 1)
    : (google.maps.geometry.poly.containsLocation(pos,section2)?
    (message = "Estas dentro de la sección 2", sect = 2):(google.maps.geometry.poly.containsLocation(pos,section3)?
    (message = "Estas dentro de la sección 3", sect = 3):(google.maps.geometry.poly.containsLocation(pos,section4)?
    (message = "Estas dentro de la sección 4", sect = 4):(google.maps.geometry.poly.containsLocation(pos,section5)?
    (message = "Estas dentro de la sección 5", sect = 5):(google.maps.geometry.poly.containsLocation(pos,section6)?
    (message = "Estas dentro de la sección 6", sect = 6):((google.maps.geometry.poly.containsLocation(pos,sectionE)? (message = "¡Estas dentro de ESCOM!", sect = 7): (message = "Estas fuera del área de cobertura",sect = 0))))))));
   
    alert(message);
    if(sect != 0)
    {
        riskLevel(sect);
    }
  //});
}
window.initMap = initMap;