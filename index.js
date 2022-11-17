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
  maxClusterRadius: 2,
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
var tbh_coord = [14.39349155503769, 108.970217166375]
var pct_coord = [15.565605176783638, 108.36660496724146]
var dbt_coord = [20.889735197204867, 105.91910278391377]
var dnp_coord = [20.68300932203522, 106.27552625615895]
var htb_coord = [21.08741269572449, 105.77980044818138]
var nq_coord = [21.083755782868344, 106.1091236569274]
var ltd_coord = [20.906881574923887, 105.83724246794709]
var nth_coord = [20.749467, 105.778607]
var ndk_coord = [18.450764, 105.780129]
var vph_coord = [20.835333, 105.762532]
var nvv_coord = [21.038830, 105.848209]
var pdt_coord = [21.031214, 105.853721]
var tdd_coord = [10.024258, 105.088906]
var nbh_coord = [21.016427, 105.736984]
var vh_coord = [0, 0]
var knh_coord = [16.457339, 107.580202]
var ld_coord = [21.023963, 105.830638]
var nhc_coord = [21.012034, 105.838007]
var tcc_coord = [10.008916, 105.082076]

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

var pbc_paths = L.featureGroup([]);
var pbc_marker = L.marker(pbc_coord, getDefaultMarkerSettings('Phan Bội Châu'))
.on('click', function(e){
  loadSidebar('pbc');
  popup_layer_group.clearLayers().addLayer(pbc_paths);
  map.fitBounds(pbc_paths.getBounds());
});
marker_group.addLayer(pbc_marker);

var tbh_paths = L.featureGroup([]);
var tbh_marker = L.marker(tbh_coord, getDefaultMarkerSettings('Tăng Bạt Hổ'))
.on('click', function(e){
  loadSidebar('tbh');
  popup_layer_group.clearLayers().addLayer(tbh_paths);
  map.fitBounds(tbh_paths.getBounds());
});
marker_group.addLayer(tbh_marker);

var pct_paths = L.featureGroup([]);
var pct_marker = L.marker(pct_coord, getDefaultMarkerSettings('Phan Châu Trinh'))
.on('click', function(e){
  loadSidebar('pct');
  popup_layer_group.clearLayers().addLayer(pct_paths);
  map.fitBounds(pct_paths.getBounds());
});
marker_group.addLayer(pct_marker);

var dbt_paths = L.featureGroup([]);
var dbt_marker = L.marker(dbt_coord, getDefaultMarkerSettings('Dương Bá Trạc'))
.on('click', function(e){
  loadSidebar('dbt');
  popup_layer_group.clearLayers().addLayer(dbt_paths);
  map.fitBounds(dbt_paths.getBounds());
});
marker_group.addLayer(dbt_marker);

var dnp_paths = L.featureGroup([]);
var dnp_marker = L.marker(dnp_coord, getDefaultMarkerSettings('Đào Nguyên Phổ'))
.on('click', function(e){
  loadSidebar('dnp');
  popup_layer_group.clearLayers().addLayer(dnp_paths);
  map.fitBounds(dnp_paths.getBounds());
});
marker_group.addLayer(dnp_marker);

var htb_paths = L.featureGroup([]);
var htb_marker = L.marker(htb_coord, getDefaultMarkerSettings('Hoàng Tăng Bí'))
.on('click', function(e){
  loadSidebar('htb');
  popup_layer_group.clearLayers().addLayer(htb_paths);
  map.fitBounds(htb_paths.getBounds());
});
marker_group.addLayer(htb_marker);

var nq_paths = L.featureGroup([]);
var nq_marker = L.marker(nq_coord, getDefaultMarkerSettings('Nguyễn Quyền'))
.on('click', function(e){
  loadSidebar('nq');
  popup_layer_group.clearLayers().addLayer(nq_paths);
  map.fitBounds(nq_paths.getBounds());
});
marker_group.addLayer(nq_marker);

var ltd_paths = L.featureGroup([]);
var ltd_marker = L.marker(ltd_coord, getDefaultMarkerSettings('Lương Trúc Đàm'))
.on('click', function(e){
  loadSidebar('ltd');
  popup_layer_group.clearLayers().addLayer(ltd_paths);
  map.fitBounds(ltd_paths.getBounds());
});
marker_group.addLayer(ltd_marker);

var nth_paths = L.featureGroup([]);
var nth_marker = L.marker(nth_coord, getDefaultMarkerSettings('Nguyễn Thượng Hiền'))
.on('click', function(e){
  loadSidebar('nth');
  popup_layer_group.clearLayers().addLayer(nth_paths);
  map.fitBounds(nth_paths.getBounds());
});
marker_group.addLayer(nth_marker);

var ndk_paths = L.featureGroup([]);
var ndk_marker = L.marker(ndk_coord, getDefaultMarkerSettings('Ngô Đức Kế'))
.on('click', function(e){
  loadSidebar('ndk');
  popup_layer_group.clearLayers().addLayer(ndk_paths);
  map.fitBounds(ndk_paths.getBounds());
});
marker_group.addLayer(ndk_marker);

var vph_paths = L.featureGroup([]);
var vph_marker = L.marker(vph_coord, getDefaultMarkerSettings('Vũ Phạm Hàm'))
.on('click', function(e){
  loadSidebar('vph');
  popup_layer_group.clearLayers().addLayer(vph_paths);
  map.fitBounds(vph_paths.getBounds());
});
marker_group.addLayer(vph_marker);

var nvv_paths = L.featureGroup([]);
var nvv_marker = L.marker(nvv_coord, getDefaultMarkerSettings('Nguyễn Văn Vĩnh'))
.on('click', function(e){
  loadSidebar('nvv');
  popup_layer_group.clearLayers().addLayer(nvv_paths);
  map.fitBounds(nvv_paths.getBounds());
});
marker_group.addLayer(nvv_marker);

var pdt_paths = L.featureGroup([]);
var pdt_marker = L.marker(pdt_coord, getDefaultMarkerSettings('Phạm Duy Tốn'))
.on('click', function(e){
  loadSidebar('pdt');
  popup_layer_group.clearLayers().addLayer(pdt_paths);
  map.fitBounds(pdt_paths.getBounds());
});
marker_group.addLayer(pdt_marker);

var nbh_paths = L.featureGroup([]);
var nbh_marker = L.marker(nbh_coord, getDefaultMarkerSettings('Nguyễn Bá Học'))
.on('click', function(e){
  loadSidebar('nbh');
  popup_layer_group.clearLayers().addLayer(nbh_paths);
  map.fitBounds(nbh_paths.getBounds());
});
marker_group.addLayer(nbh_marker);

var knh_paths = L.featureGroup([]);
var knh_marker = L.marker(knh_coord, getDefaultMarkerSettings('Kỳ Ngoại Hầu'))
.on('click', function(e){
  loadSidebar('knh');
  popup_layer_group.clearLayers().addLayer(knh_paths);
  map.fitBounds(knh_paths.getBounds());
});
marker_group.addLayer(knh_marker);

var ld_paths = L.featureGroup([]);
var ld_marker = L.marker(ld_coord, getDefaultMarkerSettings('Lê Đại'))
.on('click', function(e){
  loadSidebar('ld');
  popup_layer_group.clearLayers().addLayer(ld_paths);
  map.fitBounds(ld_paths.getBounds());
});
marker_group.addLayer(ld_marker);

var nhc_paths = L.featureGroup([]);
var nhc_marker = L.marker(nhc_coord, getDefaultMarkerSettings('Nguyễn Hữu Cầu'))
.on('click', function(e){
  loadSidebar('nhc');
  popup_layer_group.clearLayers().addLayer(nhc_paths);
  map.fitBounds(nhc_paths.getBounds());
});
marker_group.addLayer(nhc_marker);

var tcc_paths = L.featureGroup([]);
var tcc_marker = L.marker(tcc_coord, getDefaultMarkerSettings('Trần Chánh Chiểu'))
.on('click', function(e){
  loadSidebar('tcc');
  popup_layer_group.clearLayers().addLayer(tcc_paths);
  map.fitBounds(tcc_paths.getBounds());
});
marker_group.addLayer(tcc_marker);
