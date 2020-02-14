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

    },
    created() {

    },
    mounted() {
      // 鼠标的坐标
      this.mousePositionControl = new MousePosition({
        coordinateFormat: createStringXY(4),
        projection: 'EPSG:4326',
        // comment the following two lines to have the mouse position
        // be placed within the map.
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
