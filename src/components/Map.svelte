<script>
    //import 'leaflet/dist/leaflet.css';
    import {LeafletMap} from '../services/leaflet-map';
    import {getContext, onMount} from "svelte";

    const woodlands = getContext("Woodlands");

    let latitude = 52.160858;
    let longitude = -7.152420;

    let map;
    onMount(async () => {
        const mapConfig = {
            location: {latitude: latitude, longitude: longitude},
            zoom: 8,
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

</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-box-shadow-large uk-width-1-1">
        <div id="donation-map" class="ui embed" style="height:600px"></div>
    </div>
</div>

