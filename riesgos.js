/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// This example creates a simple polygon representing the Bermuda Triangle.
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: { lat: 19.490241, lng: -99.131854 },
      mapTypeId: "terrain",
    });
    // Define the LatLng coordinates for the polygon's path.
    //adicion inicio
    const poligon1Coords = [
        {lat: 19.485263, lng: -99.136557}, ///esq sur izq
          {lat: 19.484954, lng: -99.134699}, ///esq sur der
          {lat: 19.487714, lng: -99.134112}, ///esq centro der
          {lat: 19.486991, lng: -99.130812}, ///centro der
      {lat: 19.494001, lng: -99.131534}, ///sup centro
      {lat: 19.491293, lng: -99.135630}
    ];
    const poligon2Coords = [
      {lat: 19.486991, lng: -99.130812}, ///centro der
          {lat: 19.483943, lng: -99.126536}, ///esq der inf
          {lat: 19.487888, lng: -99.123247}, ///esq der sup
          {lat: 19.494001, lng: -99.131534}, ///sup centro
    ];
    const poligon3Coords = [
        {lat: 19.494001, lng: -99.131534}, ///sup centro
          {lat: 19.495641, lng: -99.138995}, /// esq izq sup
          {lat: 19.492106, lng: -99.139693}, /// esq izq inf
      {lat: 19.491293, lng: -99.135630}
    ];
    
    //Calcula los factores por seccion
    //nueva implementacion
    let factor_sec = ["3.5", "2.5", "1.5"];
    let riesgo = ["#5D7837", "#5D7837", "#5D7837"];
    bajo = "#5D7837";
    medio = "#FFC012";
    alto = "#F32121";
    extremo = "#AE1212";
      //factor_sec_1 = 3.5;
      //factor_sec_2 = 2.5;
      //factor_sec_3 = 1.5;
    for (var i = 0; i < 3; i++) {
        if (factor_sec[i] <= 3.5){
          //riesgo[i] = bajo;
              if (factor_sec[i] <= 2.5){
            if (factor_sec[i] <= 1.5){
              riesgo[i] = bajo;
          }
          else{
              riesgo[i] = medio;
          }
        }
        else{
               riesgo[i] = alto;
        }  
           }
      else{
          riesgo[i] = extremo;
      }
    }
    // Construct the polygon 1.
    const sec_1_poligon = new google.maps.Polygon({
      //paths: triangleCoords,
      paths: poligon1Coords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor : riesgo[0],
      fillOpacity: 0.5,
    });
    // Construct the polygon 1.
    const sec_2_poligon = new google.maps.Polygon({
      //paths: triangleCoords,
      paths: poligon2Coords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor : riesgo[1],
      fillOpacity: 0.8,
    });
    // Construct the polygon 1.
    const sec_3_poligon = new google.maps.Polygon({
      //paths: triangleCoords,
      paths: poligon3Coords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor : riesgo[2],
      fillOpacity: 0.8,
    });
    
    sec_1_poligon.setMap(map);
      sec_2_poligon.setMap(map);
    sec_3_poligon.setMap(map);
  }
  //adicion fin
  
  window.initMap = initMap;