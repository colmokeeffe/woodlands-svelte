<script>
  //import 'leaflet/dist/leaflet.css';
  import {mainBar, navBar, subTitle, title} from "../stores"
  import {LeafletMap} from '../services/leaflet-map';
  import {getContext, onMount} from "svelte";
  import woodlogo from "/src/assets/woodlogo.jpg";

  const woodlands = getContext("Woodlands");

  let latitude = 53.760858;
  let longitude = -7.352420;

  let map;
  onMount(async () => {
    const mapConfig = {
      location: {latitude: latitude, longitude: longitude},
      zoom: 7,
      minZoom: 1,
    };
    map = new LeafletMap("donation-map", mapConfig, 'Terrain');
    map.addLayerGroup('Woods');
    map.showZoomControl();
    map.showLayerControl();
    const woods = woodlands.woodList;
    woods.forEach(wood=>{
      const woodStr = `${wood.title}`;
      map.addMarker({latitude: wood.latitude, longitude: wood.longitude}, woodStr, 'Woods');
    });
  });

  title.set("[WOODLANDS]");
  subTitle.set("Explore.Wander.Discover");
  navBar.set({
    bar: mainBar
  });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
  <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-1-1">
    <div id="donation-map" class="ui embed" style="height:200px"></div>
  </div>
</div>

<h3 class="ui horizontal divider header">
  Contact
</h3>
<h4 class="ui center aligned header">Visit us at woodlands.com for more information<br> or <br>Contact woodlands@gmail.com</h4>

<div class="uk-flex-middle uk-text-center" uk-grid>
  <div class="uk-width 1@m ">
    <img width="200" src="{woodlogo}" alt="logo">
  </div>
</div>