// Code JavaScript pour initialiser la carte
var map = L.map("map").setView([49.271289, 1.199746], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Placer un marqueur sur la carte
var marker = L.marker([49.271289, 1.199746]).addTo(map);
marker.bindPopup("<b>1 allée du Brame 27100 Val-de-Reuil</b>").openPopup();