////BaiduMap////
// 创建地图实例
var map = new BMapGL.Map("basemap");
// 设置起始中心点
var point = new BMapGL.Point(116.404, 39.915);

// 初始化地图，设置中心点坐标和地图级别
map.centerAndZoom(point, 12);
map.enableScrollWheelZoom(true);

//自定义地图样式
map.setMapStyleV2({     
	styleId: '6cd6f6fb7e6a4b118ddf9a4cb92efc3d'
});

var myIcon = new BMapGL.Icon(
	"place.jpg", 
	new BMapGL.Size(2, 2),   
    {anchor: new BMapGL.Size(0, 0)});     

var marker = new BMapGL.Marker(point);        // 创建标注   

map.addOverlay(marker, {icon: myIcon, title:"为啥不显示"});  

//加覆盖物
var polygon = new BMapGL.Polygon([
        new BMapGL.Point(116.387112,39.920977),
        new BMapGL.Point(116.385243,39.913063),
        new BMapGL.Point(116.394226,39.917988),
        new BMapGL.Point(116.401772,39.921364),
        new BMapGL.Point(116.41248,39.927893)
    ], {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});
map.addOverlay(polygon);

var polyline = new BMapGL.Polyline([
		new BMapGL.Point(116.399, 39.910),
		new BMapGL.Point(116.405, 39.920),
		new BMapGL.Point(116.425, 39.900)
	], {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});
map.addOverlay(polyline);










