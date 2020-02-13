<template>
  <div class="container">
    <div id="map" class="map" ref="rootMap">

    </div>
    <div class="btn-con">
      类型：
      <el-select v-model="type" placeholder="请选择">
        <el-option value="Circle" label="圆">圆</el-option>
        <el-option value="Square" label="四边形">四边形</el-option>
        <el-option value="Box" label="正方形">正方形</el-option>
        <el-option value="Star" label="星">星</el-option>
        <el-option value="None" label="无">无</el-option>
      </el-select>
      <el-button type="primary" @click="addInteraction()">绘制</el-button>
    </div>

  </div>

</template>

<script>
import "ol/ol.css";
import { Map, View } from "ol";
import Polygon from 'ol/geom/Polygon';
import Draw, {createRegularPolygon, createBox} from 'ol/interaction/Draw';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {OSM, Vector as VectorSource} from 'ol/source';

import mapConfig from '../../config/mapConfig.js'
export default {
  name: 'drawShape',
  data() {
    return {
      raster: null,
      source: null,
      vector: null,
      map: null,
      type: "Circle",
      draw: null,
    }
  },
  watch: {
    type: function() {
      this.map.removeInteraction(this.draw);
      this.addInteraction()
      console.log(this.type)
    }
  },
  methods: {
    addInteraction(){
      let value = this.type
      if (value !== 'None') {
        let geometryFunction;
        if (value === 'Square') {
          value = 'Circle';
          geometryFunction = createRegularPolygon(4);
        } else if (value === 'Box') {
          value = 'Circle';
          geometryFunction = createBox();
        } else if (value === 'Star') {
          value = 'Circle';
          geometryFunction = function(coordinates, geometry) {
            let center = coordinates[0];
            let last = coordinates[1];
            let dx = center[0] - last[0];
            let dy = center[1] - last[1];
            let radius = Math.sqrt(dx * dx + dy * dy);
            let rotation = Math.atan2(dy, dx);
            let newCoordinates = [];
            let numPoints = 12;
            for (let i = 0; i < numPoints; ++i) {
              let angle = rotation + i * 2 * Math.PI / numPoints;
              let fraction = i % 2 === 0 ? 1 : 0.5;
              let offsetX = radius * fraction * Math.cos(angle);
              let offsetY = radius * fraction * Math.sin(angle);
              newCoordinates.push([center[0] + offsetX, center[1] + offsetY]);
            }
            newCoordinates.push(newCoordinates[0].slice());
            if (!geometry) {
              geometry = new Polygon([newCoordinates]);
            } else {
              geometry.setCoordinates([newCoordinates]);
            }
            return geometry;
          };
        }
        this.draw = new Draw({
          source: this.source,
          type: value,
          geometryFunction: geometryFunction
        });
        this.map.addInteraction(this.draw);
      }
    }
  },
  created() {

  },
  mounted() {
    this.raster = new TileLayer({
      source: new OSM()
    });

    this.source = new VectorSource({wrapX: false});

    this.vector = new VectorLayer({
      source: this.source
    });

    let mapContainer = this.$refs.rootMap;
    this.map = new Map({
      target: mapContainer,
      // layers: mapConfig.streetMap(),
      layers: [this.raster, this.vector],
      view: new View({
        projection: "EPSG:4326",    //使用4326坐标系
        center: [mapConfig.x, mapConfig.y],  //配置中的坐标
        zoom: mapConfig.zoom
      })
    });





  },
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
    .btn-con{
      padding: 15px;
    }
  }

  /*隐藏ol的一些自带元素*/
  /*.ol-attribution,.ol-zoom { display: none;}*/
</style>
