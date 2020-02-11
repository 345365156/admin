import TileLayer from "ol/layer/Tile"
import TileArcGISRest from 'ol/source/TileArcGISRest'
import OSM from "ol/source/OSM"
import XYZ from 'ol/source/XYZ'

let mapType = 2          //0表示部署的离线瓦片地图，1表示OSM,2表示使用Arcgis在线午夜蓝地图服务

let streetMap = function(){
  let mapLayer = null;
  switch(mapType){
    case 0: // 离线瓦片地图
      mapLayer = new TileLayer({
        source: new XYZ({
          url:' http://192.168.1.3:1025/streetmap/shenzhen/{z}/{x}/{y}.jpg'
        })
      })
      break;
    case 1: // OSM
      mapLayer = new TileLayer({
        source: new OSM()
      })
      break;
    case 2: // Arcgis在线午夜蓝地图服务
      mapLayer = new TileLayer({
        source:new TileArcGISRest({
          url:'https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer'
        })
      })
      break;
  }
  return [mapLayer];
}

const mapConfig={
  x: 120.1786255,     //中心点经度和纬度
  y: 30.1838147,
  zoom: 16,          //地图缩放级别
  streetMap: streetMap
};

export default mapConfig
