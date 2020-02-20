var mymap = L.map('mapid').setView([29.049176, -80.933488], 10.5);

var home = L.marker([28.975976, -80.918880]).addTo(mymap);

var circle = L.circle([28.975976, -80.918880], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 1000
}).addTo(mymap);

var polygon = L.polygon([
    [28.976061, -80.918923],
    [28.976001, -80.918840],
    [28.975914, -80.918870],
    [28.975954, -80.918972]
]).addTo(mymap);

var school = L.marker([29.003465, -80.930844]).addTo(mymap);

var church = L.marker([29.038887, -80.939784]).addTo(mymap);

var oldfort = L.marker([29.027205, -80.921866]).addTo(mymap);

var island = L.marker([29.029730, -80.913777]).addTo(mymap);

home.bindPopup("<b>My Home!</b><br>Umbrella Tree Street");
school.bindPopup("NSB High School");
church.bindPopup("Church");
oldfort.bindPopup("<b>Old Fort Park</b><br>Oldest Spanish Colony in America");
island.bindPopup("<b>Disappearing Island</b><br>Best place to camp and lose a canoe");

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGFyYW5hOTMiLCJhIjoiY2s2dXdyeGd6MGVudjNmbzhuOTJoNG11bSJ9.Z1GEpOQoOMCbi4YP2r5Abg'
}).addTo(mymap);