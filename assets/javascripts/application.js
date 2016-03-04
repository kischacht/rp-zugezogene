var renderResultBox = function renderResultBox(feature) {

  var html = (
    '<strong>' +
    feature.properties.city +
    '</strong>' +
    '<p>' +
    feature.properties.country +
    ' | ' +
    Math.round(feature.properties.distance) + ' km' +
    '</p>' +
    '<p>' +
    feature.properties.count + ' Düsseldorfer sind hier geboren.' +
    '</p>'
  )

  $('#result').html(html);
}

var map = L.map('map', { zoomControl: false }).setView([51.5167, 9.9167], 7);
new L.Control.Zoom({ position: 'bottomright' }).addTo(map);

// improve experience on mobile
if (map.tap) map.tap.disable();

// adding layers
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">&copy; Mapbox &copy; OpenStreetMap</a> | <a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a>',
  id: 'maschurig.paf8eank',
  accessToken: 'pk.eyJ1IjoibWFzY2h1cmlnIiwiYSI6ImNpbDJiajEzejAwY2F3OW0wOG95czR5eXkifQ.igaYJkeB7_dF36mj4N1Jvg'
}).addTo(map);


var addMarkersToMap = function addMarkersToMap(data) {
  var geoJsonLayer = L.geoJson(data, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, {
        radius: 1,
        fillColor: "transparent",
        color: "transparent",
        weight: 0,
        opacity: 0.8,
        fillOpacity: 0.6
      });
    },
    onEachFeature: function (feature, layer) {
      var circle = L.circle([feature.geometry.coordinates[1],
            feature.geometry.coordinates[0]], Math.sqrt(feature.properties.count) * 250, {
        color: 'transparent',
        opacity: 0.6,
        fillColor: '#ffc100',
        fillOpacity: 0.5,
        stroke: false
      }).addTo(map);

      innercircle = L.circle([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], 700, {
        color: '#8F8F8D',
        fillColor: '#8F8F8D',
        fillOpacity: 1,
        stroke: false
      }).addTo(map);

      popupHtml = (
        '<p>' + feature.properties.count + '</p>' +
        '<p>kommen aus ' + feature.properties.city + '</p>'
      )

      var popup = L.popup({
        autoPan: false,
        keepInView: true,
        autoPanPaddingBottomRight: new L.Point(10, 50),
        offset: new L.Point(10, -10),
      }).setContent(popupHtml);

      circle.bindPopup(popup);
      circle.on('mouseover', function(e) {
        this.setStyle({color: '#42cac6', fillColor: '#42cac6'});
        renderResultBox(feature);
      });

      circle.on('mouseout', function(e) {
        this.setStyle({color: '#ffc100', fillColor: '#ffc100'});
      });
    }
  });

  map.addLayer(geoJsonLayer);
  map.addControl( new L.Control.Search({layer: geoJsonLayer, propertyName: 'city'}) );
};

$.getJSON( "./opendata/cities.geojson", function(data) {
  addMarkersToMap(data);
});
