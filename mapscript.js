//Make map: Esri World Gray Canvas

var map = L.map('map').setView([array[121][4], array[121][5]], 9);

L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
}).addTo(map);

//Add circles
for (var i = 0; i < array.length; i++) {
      if(i == 121) continue;
      circle = L.circle([array[i][4], array[i][5]], Math.sqrt(array[i][3])*100, {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5
      }).addTo(map);
      circle.bindPopup(array[i][3] + " Zugezogene")
	circle.on('mouseover', function (e) {
	    this.openPopup();
	    this.setStyle({color: 'orange', fillColor: 'orange'})
	});
	circle.on('mouseout', function (e) {
	    this.closePopup();
	    this.setStyle({color: 'red', fillColor: '#f03'})
	});
}
