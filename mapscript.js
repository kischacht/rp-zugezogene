//Make map: Esri World Gray Canvas

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

var info = L.control();
//Add circles

var array2 = [];

for (var i = 0; i < array.length; i++) {
      if(i == 121) continue;
	innercircle = L.circle([array[i][4], array[i][5]], Math.sqrt(array[i][3])*15, {
	    color: '#8F8F8D',
	    fillColor: '#8F8F8D',
	    fillOpacity: 1
	}).addTo(map);
      circle = L.circle([array[i][4], array[i][5]], Math.sqrt(array[i][3])*150, {
          color: '#fff498',
          fillColor: '#fff498',
          fillOpacity: 0.5
      }).addTo(map);
      circle.bindPopup(array[i][3] + " Zugezogene")
	circle.on('mouseover', function (e) {
	    this.openPopup();
	    this.setStyle({color: '#ffc100', fillColor: '#ffc100'});
	});
	circle.on('mouseout', function (e) {
	    this.closePopup();
	    this.setStyle({color: '#fff498', fillColor: '#fff498'});
	});
//	circle.on('click', zoomToFeature);
	array2.push(circle);
}
markers.addLayers(array2);
