// Code JavaScript pour initialiser la carte
var map = L.map("map").setView([49.285958, 1.008255], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Placer un marqueur sur la carte
var marker = L.marker([49.285958, 1.008255]).addTo(map);
marker.bindPopup("<b>Clinique vétérinaire La Forêt</b>").openPopup();