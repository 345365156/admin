<template>
  <div class="container">
    <div id="map" class="map" ref="rootMap">

    </div>
  </div>

</template>

<script>
import "ol/ol.css";
import { Map, View, Feature } from "ol";
import {defaults as defaultInteractions, DragRotateAndZoom} from 'ol/interaction';
import TileLayer from 'ol/layer/Tile';

import mapConfig from '../../config/mapConfig.js'
export default {
  name: 'Openlayers',
  data() {
    return {
      map: null,
      draw: null,
    }
  },
  watch: {

  },
  methods: {

  },
  created() {

  },
  mounted() {
    let mapContainer = this.$refs.rootMap;
    this.map = new Map({
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
    }
  }
</style>
