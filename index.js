var map = L.map('map').setView([21.0333, 105.8500], 8);

var tiles = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 12,
    attribution: '&copy; <a href="https://www.arcgis.com/">ArcGIS Online</a>'
}).addTo(map);

var default_icon = L.icon({
  iconUrl: 'assets/default_icon.png',
  iconSize:     [40, 70], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 70], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var default_icon_red = L.icon({
  iconUrl: 'assets/red_icon.png',
  iconSize:     [40, 70], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 70], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

function clearWelcome() {
  document.getElementById('sidebar_init').style.display = 'none';
  document.getElementById('sidebar').style.height = '95vh';
}

function showWelcome() {
  document.getElementById('sidebar_init').style.display = 'block';
  document.getElementById('sidebar').style.height = '5vh';
}
showWelcome();

function loadSidebar(sidebar_content_link) {
  clearWelcome();
  document.all.sidebar_content.src = 'data/' + sidebar_content_link + '.html';
}

function clearSidebar() {
  showWelcome();
  document.all.sidebar_content.src = '';
}

var popup_layer_group = L.layerGroup([]).addTo(map);

var marker_group = L.markerClusterGroup({
  maxClusterRadius: 20,
});
map.addLayer(marker_group)

function getStarted() {
  loadSidebar('lvc');
  popup_layer_group.clearLayers().addLayer(lvc_paths);
  map.fitBounds(lvc_paths.getBounds());
}

function getDefaultMarkerSettings(arg1) {
  return {title: arg1, icon: default_icon};
}

function getDefaultPolylineSettings() {
  return {color: '#00196E', opacity: 0.8, dashArray: [6]}
}

// -----------------------------------------------------------------------------

var lvc_coord = [20.895355518347873, 105.8438085563023]
var pbc_coord = [18.91929629726418, 105.30516604454925]

var path_lvc_pbc = L.polyline([lvc_coord, pbc_coord], getDefaultPolylineSettings())
.bindPopup('Popup generic text');

var lvc_paths = L.featureGroup([path_lvc_pbc]);
var lvc_marker = L.marker(lvc_coord, getDefaultMarkerSettings('Lương Văn Can'))
.on('click', function(e){
  loadSidebar('lvc');
  popup_layer_group.clearLayers().addLayer(lvc_paths);
  map.fitBounds(lvc_paths.getBounds());
});
marker_group.addLayer(lvc_marker);

var pbc_marker = L.marker(pbc_coord, getDefaultMarkerSettings('Phan Bội Châu'))
.on('click', function(e){
  document.all.sidebar_content.src='';
  popup_layer_group.clearLayers();
});
marker_group.addLayer(pbc_marker);
