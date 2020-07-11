<template>
  <div class="map">
    <div class="olMap" id="olMap"></div>
  </div>
</template>

<script>
  // import FileSaver from 'file-saver'
  // import { parse } from 'path';
  // import { setTimeout } from 'timers';
  export default {
    name: 'map',
    data () {
      return {
        map: null
      }
    },
    methods: {
      initMap(){
        var nomalMap = new ol.layer.Tile({
          source: new ol.source.OSM()
        })
        var layss = {}

        this.map = new ol.Map({
          layers: [nomalMap],
          view: new ol.View({
            // center:[120, 30]
            center: [0, 0],
            zoom: 2
          }),
          target: 'olMap'
        })
        console.log('初始化地图 this.map', this.map);
        // this.map.on()

        this.map.on('click',  (evt) => {
          // 经纬度坐标
          // var coord = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');
          console.log('pointermove evt ', evt);
          console.log('this.map ===', this.map.getLayers());

        });
        // console.log('this.map ===', this.map.getLayers());
        this.drawLine()
      },
      drawLine() {
        // var anchor = new ol.Feature({
        //   geometry: new ol.geom.Point([120, 30])
        //   // geometry: new ol.geom.Polygon([[120, 30], [121, 30], [120, 31]])
        // })
        var anchor = new ol.Feature(new ol.geom.Point([120, 30]));
        anchor.setStyle(new ol.style.Style({
          // fill: new ol.style.Fill({
          //   color: 'rgba(255, 255, 255, 0.6)'
          // }),
          // stoke: new ol.style.Stroke({
          //   color: '#319FD3',
          //   width:1
          // })
          image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: 'https://openlayers.org/en/v4.6.5/examples/data/icon.png'
          }))
        }))
        let source = new ol.source.Vector({
          features:[anchor]
        })
        let markerlayer = new ol.layer.Vector({
          source: source
        })
        // return markerlayer
        // console.log('markerlayer ===',markerlayer);
        // console.log('this.map ===', this.map.getLayers());
        // this.map.getLayers().push(markerlayer)
        // console.log('this.map ===', this.map.getLayers().getArray());
        // this.map.addLayer(markerlayer)
        this.map.addLayer(markerlayer)
      },
      addLayerggg () {
        var distance = 100

        var count = 20000;
        var features = new Array(count);
        var e = 4500000;
        for (var i = 0; i < count; ++i) {
          var coordinates = [2 * e * Math.random() - e, 2 * e * Math.random() - e];
          features[i] = new ol.Feature(new ol.geom.Point(coordinates));
        }

        var source = new ol.source.Vector({
          features: features
        });

        var clusterSource = new ol.source.Cluster({
          distance: parseInt(distance, 10),
          source: source
        });

        var styleCache = {};
        var clusters = new ol.layer.Vector({
          source: clusterSource,
          style: function(feature) {
            var size = feature.get('features').length;
            var style = styleCache[size];
            if (!style) {
              style = new ol.style.Style({
                image: new ol.style.Circle({
                  radius: 10,
                  stroke: new ol.style.Stroke({
                    color: '#fff'
                  }),
                  fill: new ol.style.Fill({
                    color: '#3399CC'
                  })
                }),
                text: new ol.style.Text({
                  text: size.toString(),
                  fill: new ol.style.Fill({
                    color: '#fff'
                  })
                })
              });
              styleCache[size] = style;
            }
            return style;
          }
        });
        console.log('clusters ==', clusters);
        this.map.addLayer(clusters)

      }



    },
    watch:{
      formLabelAlign:{//深度监听，可监听到对象、数组的变化
        handler(val, oldVal){
          // console.log("b.c: "+val.c, oldVal.c);//但是这两个值打印出来却都是一样的
          console.log('formLabelAlign', val);
          // localStorage.setItem('ready_to_store', JSON.stringify(val))
        },
        deep:true
      }
    },
    mounted(){
      this.initMap()

    },
    filters: {
      formatClock: function(ts) {
        ts = new Date(ts)
        var year = ts.getFullYear();
        var month = ts.getMonth() + 1 < 10 ? '0' + (ts.getMonth() + 1) : ts.getMonth() + 1
        var date = ts.getDate() < 10 ? '0' + ts.getDate() : ts.getDate();
        var hour = ts.getHours() < 10 ? '0' + ts.getHours() : ts.getHours();
        var minute = ts.getMinutes() < 10 ? '0' + ts.getMinutes() : ts.getMinutes();

        var now_date = new Date()
        var today = now_date.getDate() < 10 ? '0' + now_date.getDate() : now_date.getDate();

        return year + "/" + month + "/" + date

      },
      formatdate: function(ts) {
        ts = new Date(ts)
        var year = ts.getFullYear();
        var month = ts.getMonth() + 1 < 10 ? '0' + (ts.getMonth() + 1) : ts.getMonth() + 1
        var date = ts.getDate() < 10 ? '0' + ts.getDate() : ts.getDate();
        var hour = ts.getHours() < 10 ? '0' + ts.getHours() : ts.getHours();
        var minute = ts.getMinutes() < 10 ? '0' + ts.getMinutes() : ts.getMinutes();

        var now_date = new Date()
        var today = now_date.getDate() < 10 ? '0' + now_date.getDate() : now_date.getDate();

        return year + "/" + month + "/" + date + " " + hour + ":" + minute


      }
    }
  }
</script>

<style>

  .olMap{
    width: 100%;
    height: 80vh;
  }
</style>
