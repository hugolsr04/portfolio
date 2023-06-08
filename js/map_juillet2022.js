// Code JavaScript pour initialiser la carte
var map = L.map("map").setView([49.274089, 1.224201], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Placer un marqueur sur la carte
var marker = L.marker([49.274089, 1.224201]).addTo(map);
marker.bindPopup("<b>Centre technique Municipal</b>").openPopup();