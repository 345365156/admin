<template>
  <div class="container">
    <div id="map" class="map" ref="rootMap">

    </div>
    <div class="btn-con">
      类型：
      <el-select v-model="type" placeholder="请选择">
        <el-option value="Point" label="点">点</el-option>
        <el-option value="LineString" label="线">线</el-option>
        <el-option value="Polygon" label="多边形">多边形</el-option>
        <el-option value="Circle" label="圆">圆</el-option>
        <el-option value="None" label="无">无</el-option>
      </el-select>
      <el-button type="primary" @click="addInteraction()">绘制</el-button>
    </div>
  </div>

</template>

<script>
import "ol/ol.css";
import { Map, View, Feature } from "ol";
import Draw from 'ol/interaction/Draw';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {OSM, Vector as VectorSource} from 'ol/source';
import mapConfig from '../../config/mapConfig.js'
export default {
  name: 'Openlayers',
  data() {
    return {
      raster: null,
      source: null,
      vector: null,
      map: null,
      type: "Point",
      draw: null,
    }
  },
  watch: {
    type: function() {
      this.map.removeInteraction(this.draw);
      this.addInteraction()
      console.log(this)
    }
  },
  methods: {
    addInteraction(){
      if (this.type !== 'None') {
        this.draw = new Draw({
          source: this.source,
          type: this.type
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




    // this.addInteraction();


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
