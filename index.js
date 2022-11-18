var map = L.map('map').setView([21.0333, 105.8500], 8);

var tiles = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
    maxNativeZoom: 12,
    maxZoom: 16,
    attribution: '&copy; DKNT 2022 & <a href="https://www.fulbright.edu.vn">Fulbright University Vietnam</a>'
}).addTo(map);

var default_icon = L.icon({
  iconUrl: 'assets/default_icon.png',
  iconSize:     [30, 50], // size of the icon
  shadowSize:   [30, 50], // size of the shadow
  iconAnchor:   [16, 50], // point of the icon which will correspond to marker's location
  shadowAnchor: [16, 50],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var default_icon_red = L.icon({
  iconUrl: 'assets/red_icon.png',
  iconSize:     [40, 85], // size of the icon
  shadowSize:   [40, 85], // size of the shadow
  iconAnchor:   [22, 85], // point of the icon which will correspond to marker's location
  shadowAnchor: [22, 85],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

function clearWelcome() {
  document.getElementById('sidebar_init').style.display = 'none';
  document.getElementById('sidebar').style.height = '95vh';
}

function showWelcome() {
  document.getElementById('sidebar_init').style.display = 'block';
  document.getElementById('sidebar').style.height = '0vh';
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
  loadSidebar('dknt');
  popup_layer_group.clearLayers().addLayer(dknt_paths);
  map.flyTo(dknt_coord);
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
var nq_coord  = [21.083755782868344, 106.1091236569274]
var ltd_coord = [20.906881574923887, 105.83724246794709]
var nth_coord = [20.749467, 105.778607]
var ndk_coord = [18.450764, 105.780129]
var vph_coord = [20.835333, 105.762532]
var nvv_coord = [21.056049609366646, 105.83336468239811]
var pdt_coord = [21.03370800688735, 105.853765167472]
var tdd_coord = [10.024258, 105.088906]
var nbh_coord = [21.016427, 105.736984]
var vh_coord  = [20.96427403868188, 105.81347017222218]
var knh_coord = [16.457339, 107.580202]
var ld_coord  = [21.003923672338228, 105.80545078807798]
var nhc_coord = [21.0120078287388, 105.83292122425031]
var tcc_coord = [10.008916, 105.082076]

//DKNT Coord
var dknt_coord = [21.03009248616381, 105.8456262466516]

//Assign coord of additional information
var tbhA_coord = [35.68962007622311, 139.56425890084813]
var lvcA_coord = [11.60623613170208, 104.8977294843828]
var pctA_coord = [15.554792358835668, 108.48380886347425]
var pctB_coord = [8.688776364693508, 106.61477640053948]
var pctC_coord = [48.882114836700254, 2.346005031746051]



//Assgign path
var path_lvc_lvcA = L.polyline([lvc_coord,lvcA_coord], getDefaultPolylineSettings());
//.bindPopup('Popup generic text');
var path_tbh_tbhA = L.polyline([tbh_coord,tbhA_coord], getDefaultPolylineSettings());
//.bindPopup('Popup generic text');
var path_pct_pctA = L.polyline([pctA_coord,pct_coord,pctB_coord, pctC_coord], getDefaultPolylineSettings());
//.bindPopup('Popup generic text');


//Pop up additional infor

var tbhA_marker = L.marker(tbhA_coord, getDefaultMarkerSettings('Tăng Bạt Hổ thời kỳ tiền ĐKNT'))
.on('click', function(e){
  loadSidebar('tbhA');
  popup_layer_group.clearLayers().addLayer(tbh_paths);
  map.flyToBounds(tbh_paths.getBounds());
});
marker_group.addLayer(tbhA_marker);

var lvcA_marker = L.marker(lvcA_coord, getDefaultMarkerSettings('Lương Văn Can thời kỳ hậu ĐKNT'))
.on('click', function(e){
  loadSidebar('lvcA');
  popup_layer_group.clearLayers().addLayer(lvc_paths);
});
marker_group.addLayer(lvcA_marker);
//PCT with 4 markers
var pctA_marker = L.marker(pctA_coord, getDefaultMarkerSettings('Phan Chu Trinh thời kỳ tiền ĐKNT'))
.on('click', function(e){
  loadSidebar('pctA');
  popup_layer_group.clearLayers().addLayer(pct_paths);
  map.flyToBounds(pct_paths.getBounds());
});
marker_group.addLayer(pctA_marker);

var pctB_marker = L.marker(pctB_coord, getDefaultMarkerSettings('Phan Chu Trinh thời kỳ bị đày ở Côn Đảo'))
.on('click', function(e){
  loadSidebar('pctB');
  popup_layer_group.clearLayers().addLayer(pct_paths);
  map.flyToBounds(pct_paths.getBounds());
});
marker_group.addLayer(pctB_marker);

var pctC_marker = L.marker(pctC_coord, getDefaultMarkerSettings('Phan Chu Trinh thời kỳ hoạt động ở Pháp'))
.on('click', function(e){
  loadSidebar('pctC');
  popup_layer_group.clearLayers().addLayer(pct_paths);
  map.flyToBounds(pct_paths.getBounds());
});
marker_group.addLayer(pctC_marker);



//Pop up markers and Lines
var lvc_paths = L.featureGroup([path_lvc_lvcA]);
var lvc_marker = L.marker(lvc_coord, getDefaultMarkerSettings('Lương Văn Can'))
.on('click', function(e){
  loadSidebar('lvc');
  popup_layer_group.clearLayers().addLayer(lvc_paths);
  map.flyToBounds(lvc_paths.getBounds());
});
marker_group.addLayer(lvc_marker);

var pbc_paths = L.featureGroup([]);
var pbc_marker = L.marker(pbc_coord, getDefaultMarkerSettings('Phan Bội Châu'))
.on('click', function(e){
  loadSidebar('pbc');
  popup_layer_group.clearLayers().addLayer(pbc_paths);
  map.flyToBounds(pbc_paths.getBounds());
});
marker_group.addLayer(pbc_marker);

var tbh_paths = L.featureGroup([path_tbh_tbhA]);
var tbh_marker = L.marker(tbh_coord, getDefaultMarkerSettings('Tăng Bạt Hổ'))
.on('click', function(e){
  loadSidebar('tbh');
  popup_layer_group.clearLayers().addLayer(tbh_paths);
  map.flyToBounds(tbh_paths.getBounds());
});
marker_group.addLayer(tbh_marker);

var pct_paths = L.featureGroup([path_pct_pctA]);
var pct_marker = L.marker(pct_coord, getDefaultMarkerSettings('Phan Châu Trinh'))
.on('click', function(e){
  loadSidebar('pct');
  popup_layer_group.clearLayers().addLayer(pct_paths);
  map.flyToBounds(pct_paths.getBounds());
});
marker_group.addLayer(pct_marker);

var dbt_paths = L.featureGroup([]);
var dbt_marker = L.marker(dbt_coord, getDefaultMarkerSettings('Dương Bá Trạc'))
.on('click', function(e){
  loadSidebar('dbt');
  popup_layer_group.clearLayers().addLayer(dbt_paths);
  map.flyToBounds(dbt_paths.getBounds());
});
marker_group.addLayer(dbt_marker);

var dnp_paths = L.featureGroup([]);
var dnp_marker = L.marker(dnp_coord, getDefaultMarkerSettings('Đào Nguyên Phổ'))
.on('click', function(e){
  loadSidebar('dnp');
  popup_layer_group.clearLayers().addLayer(dnp_paths);
  map.flyToBounds(dnp_paths.getBounds());
});
marker_group.addLayer(dnp_marker);

var htb_paths = L.featureGroup([]);
var htb_marker = L.marker(htb_coord, getDefaultMarkerSettings('Hoàng Tăng Bí'))
.on('click', function(e){
  loadSidebar('htb');
  popup_layer_group.clearLayers().addLayer(htb_paths);
  map.flyToBounds(htb_paths.getBounds());
});
marker_group.addLayer(htb_marker);

var nq_paths = L.featureGroup([]);
var nq_marker = L.marker(nq_coord, getDefaultMarkerSettings('Nguyễn Quyền'))
.on('click', function(e){
  loadSidebar('nq');
  popup_layer_group.clearLayers().addLayer(nq_paths);
  map.flyToBounds(nq_paths.getBounds());
});
marker_group.addLayer(nq_marker);

var ltd_paths = L.featureGroup([]);
var ltd_marker = L.marker(ltd_coord, getDefaultMarkerSettings('Lương Trúc Đàm'))
.on('click', function(e){
  loadSidebar('ltd');
  popup_layer_group.clearLayers().addLayer(ltd_paths);
  map.flyToBounds(ltd_paths.getBounds());
});
marker_group.addLayer(ltd_marker);

var nth_paths = L.featureGroup([]);
var nth_marker = L.marker(nth_coord, getDefaultMarkerSettings('Nguyễn Thượng Hiền'))
.on('click', function(e){
  loadSidebar('nth');
  popup_layer_group.clearLayers().addLayer(nth_paths);
  map.flyToBounds(nth_paths.getBounds());
});
marker_group.addLayer(nth_marker);

var ndk_paths = L.featureGroup([]);
var ndk_marker = L.marker(ndk_coord, getDefaultMarkerSettings('Ngô Đức Kế'))
.on('click', function(e){
  loadSidebar('ndk');
  popup_layer_group.clearLayers().addLayer(ndk_paths);
  map.flyToBounds(ndk_paths.getBounds());
});
marker_group.addLayer(ndk_marker);

var vph_paths = L.featureGroup([]);
var vph_marker = L.marker(vph_coord, getDefaultMarkerSettings('Vũ Phạm Hàm'))
.on('click', function(e){
  loadSidebar('vph');
  popup_layer_group.clearLayers().addLayer(vph_paths);
  map.flyToBounds(vph_paths.getBounds());
});
marker_group.addLayer(vph_marker);

var nvv_paths = L.featureGroup([]);
var nvv_marker = L.marker(nvv_coord, getDefaultMarkerSettings('Nguyễn Văn Vĩnh'))
.on('click', function(e){
  loadSidebar('nvv');
  popup_layer_group.clearLayers().addLayer(nvv_paths);
  map.flyToBounds(nvv_paths.getBounds());
});
marker_group.addLayer(nvv_marker);

var pdt_paths = L.featureGroup([]);
var pdt_marker = L.marker(pdt_coord, getDefaultMarkerSettings('Phạm Duy Tốn'))
.on('click', function(e){
  loadSidebar('pdt');
  popup_layer_group.clearLayers().addLayer(pdt_paths);
  map.flyToBounds(pdt_paths.getBounds());
});
marker_group.addLayer(pdt_marker);

var nbh_paths = L.featureGroup([]);
var nbh_marker = L.marker(nbh_coord, getDefaultMarkerSettings('Nguyễn Bá Học'))
.on('click', function(e){
  loadSidebar('nbh');
  popup_layer_group.clearLayers().addLayer(nbh_paths);
  map.flyToBounds(nbh_paths.getBounds());
});
marker_group.addLayer(nbh_marker);

var knh_paths = L.featureGroup([]);
var knh_marker = L.marker(knh_coord, getDefaultMarkerSettings('Kỳ Ngoại Hầu'))
.on('click', function(e){
  loadSidebar('knh');
  popup_layer_group.clearLayers().addLayer(knh_paths);
  map.flyToBounds(knh_paths.getBounds());
});
marker_group.addLayer(knh_marker);

var ld_paths = L.featureGroup([]);
var ld_marker = L.marker(ld_coord, getDefaultMarkerSettings('Lê Đại'))
.on('click', function(e){
  loadSidebar('ld');
  popup_layer_group.clearLayers().addLayer(ld_paths);
  map.flyToBounds(ld_paths.getBounds());
});
marker_group.addLayer(ld_marker);

var nhc_paths = L.featureGroup([]);
var nhc_marker = L.marker(nhc_coord, getDefaultMarkerSettings('Nguyễn Hữu Cầu'))
.on('click', function(e){
  loadSidebar('nhc');
  popup_layer_group.clearLayers().addLayer(nhc_paths);
  map.flyToBounds(nhc_paths.getBounds());
});
marker_group.addLayer(nhc_marker);

var tcc_paths = L.featureGroup([]);
var tcc_marker = L.marker(tcc_coord, getDefaultMarkerSettings('Trần Chánh Chiểu'))
.on('click', function(e){
  loadSidebar('tcc');
  popup_layer_group.clearLayers().addLayer(tcc_paths);
  map.flyToBounds(tcc_paths.getBounds());
});
marker_group.addLayer(tcc_marker);

var vh_paths = L.featureGroup([]);
var vh_marker = L.marker(vh_coord, getDefaultMarkerSettings('Võ Hoành'))
.on('click', function(e){
  loadSidebar('vh');
  popup_layer_group.clearLayers().addLayer(vh_paths);
  map.flyToBounds(vh_paths.getBounds());
});
marker_group.addLayer(vh_marker);

var dknt_paths = L.featureGroup([]);
var dknt_marker = L.marker(dknt_coord, {title: 'Đông Kinh Nghĩa Thục', icon: default_icon_red})
.on('click', function(e){
  loadSidebar('dknt');
  popup_layer_group.clearLayers().addLayer(dknt_paths);
  map.flyToBounds(dknt_paths.getBounds());
})
.addTo(map);
