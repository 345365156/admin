<template>
  <div class="container">
    <div id="map" class="map" ref="rootMap">
      <div id="mouse-position"></div>
    </div>
    <div class="position">
    </div>

  </div>

</template>

<script>
  import "ol/ol.css";
  import { Map, View, Feature } from "ol";
  import { defaults as defaultInteractions, DragRotateAndZoom } from 'ol/interaction';

  import {defaults as defaultControls} from 'ol/control';
  import MousePosition from 'ol/control/MousePosition';
  import {createStringXY} from 'ol/coordinate';

  import mapConfig from '../../config/mapConfig.js'
  export default {
    name: 'Openlayers',
    data() {
      return {
        map: null,
        draw: null,
        mousePositionControl: null, // 鼠标控件
        format: 'EPSG:4326',

      }
    },
    watch: {

    },
    methods: {
      // setPoint() {
      //   let lnglats = [ // 点位
      //     [117.204883, 31.840285],
      //     [117.2616140654, 31.8626171434],
      //     [117.2870114613, 31.8588879936],
      //     [117.2822851546, 31.8862905440]
      //   ]
      //
      //   let featureArr = []; // 容器
      //
      //   let anchor = new ol.Feature({
      //     geometry: new ol.geom.Point([20.1795, 30.1838, 0]),
      //     // FeatureInfo: {
      //     //   wiLng: 'wiLng',
      //     //   wiLat: 'wiLat'
      //     // }
      //   })
      //   // 设置点位的样式
      //   anchor.setStyle(new ol.style.Style({
      //     image: new ol.style.Icon({
      //       src: '@/assets/images/nor.png', // 图片路径
      //       scale: 0.7 // 图片的缩放
      //     }),
      //     //anchor: [0.5, 1]    // 设置图标位置
      //   }))
      //   // 点位信息放入容器
      //   featureArr.push(anchor)
      //
      //   // 创建矢量数据源
      //   let source = new ol.source.Vector()
      //
      //   // 需要一个vector的layer来放置图标
      //   let marksLayer = new ol.layer.Vector({
      //     source: source,
      //     zIndex: 99
      //   })
      //   this.map.addLayer(marksLayer) // layer加进地图
      // }
      setPoint() {
        let lnglats = [
          [120.104883, 30.184028],
          [120.1616140654, 30.1862617143],
          [120.1870114613, 30.1858887993],
          [120.1822851546, 30.1886290544]
        ];
        // 创建一个Feature，并设置好在地图上的位置
        let anchor = new ol.Feature({
          geometry: new ol.geom.Point(lnglats[0])
        });
        // 样式设置
        anchor.setStyle(new ol.style.Style({
          image: new ol.style.Icon({
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1581757161061&di=6f171b9d2f480fb425837a008a075cb3&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F59%2F31%2F594d77133ee4b_610.jpg',
            scale: 0.1 // 图片的缩放
          }),
          anchor: [0.5, 1]    // 设置图标位置
        }));

        let source = new ol.source.Vector({
          features: [anchor]
        })

        // 我们需要一个vector的layer来放置图标
        let layer = new ol.layer.Vector({
          source: source,
          // zIndex: 99
        })

        this.map.addLayer(layer)
      }
    },
    created() {

    },
    mounted() {
      // 鼠标的坐标
      this.mousePositionControl = new MousePosition({
        coordinateFormat: createStringXY(4),
        projection: 'EPSG:4326',
        className: 'custom-mouse-position',
        target: document.getElementById('mouse-position'),
        undefinedHTML: '&nbsp;'
      });
      this.mousePositionControl.setProjection('EPSG:4326') // 格式
      this.mousePositionControl.setCoordinateFormat(createStringXY(4)) // 精度


      let mapContainer = this.$refs.rootMap;
      this.map = new Map({
        controls: defaultControls().extend([this.mousePositionControl]), // 控件
        interactions: defaultInteractions().extend([
          new DragRotateAndZoom() // 支持拖拽、旋转
        ]),
        target: mapContainer,
        layers: mapConfig.streetMap(),
        view: new View({
          projection: 'EPSG:4326',    // 使用4326坐标系
          center: [mapConfig.x, mapConfig.y],  // 配置中的坐标
          zoom: mapConfig.zoom
        })
      })

      // 设置点位
      this.setPoint()
    }
  }

</script>

<style lang="scss" scoped>
  .container{
    position: relative;
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 50px);
    #map{
      position: relative;
      width: 100%;
      /*height: calc(100vh - 50px);*/
      height: 500px;
      #mouse-position{
        z-index: 100;
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
  }
</style>
