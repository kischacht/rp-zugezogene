////////////////////////////////////////////////////////////
////////////////////////// Karte ///////////////////////////
////////////////////////////////////////////////////////////


//Karte initialisieren: Esri World Gray Canvas
var map = L.map('map').setView([array[121][4], array[121][5]], 9);

L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
}).addTo(map);
/*
function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds(), zoom = 2);
}
*/

//Infobar generieren
var info = L.Control.extend({
    options: {
        position: 'topright'
    },

    onAdd: function (map) {
        // create the control container with a particular class name
        var container = L.DomUtil.create('div', 'info');
	  container.innerHTML = '<p>TestTestTestTestTestTestTest<br>' + array[121][3] + '</p>';
        return container;
    }
});
map.addControl(new info());

//Kreise hinzufügen

var array2 = [];

for (var i = 0; i < array.length; i++) {
	//Düsseldorf rauslassen, sonst sieht man nichts
      if(i == 121) continue;
	//Äußerer Kreis relativ zur Anzahl Düsseldorfer
      circle = L.circle([array[i][4], array[i][5]], Math.sqrt(array[i][3])*150, {
      //    color: '#ffc100',
          fillColor: '#ffc100',
          fillOpacity: 0.5,
	    stroke: false
      }).addTo(map);
      circle.bindPopup(array[i][3] + " Zugezogene")
	//Innerer grauer Punkt relativ zur Kreisgröße
	innercircle = L.circle([array[i][4], array[i][5]], Math.sqrt(array[i][3])*25, {
	    color: '#8F8F8D',
	    fillColor: '#8F8F8D',
	    fillOpacity: 1,
	    stroke: false
	}).addTo(map);
	//Hovereffekt: Popup anzeigen, Farbe ändern
	circle.on('mouseover', function (e) {
	    this.openPopup();
	    this.setStyle({color: '#42cac6', fillColor: '#42cac6'});
	});
	circle.on('mouseout', function (e) {
	    this.closePopup();
	    this.setStyle({color: '#ffc100', fillColor: '#ffc100'});
    });
//	circle.on('click', zoomToFeature);
	array2.push(circle);
}
markers.addLayers(array2);
