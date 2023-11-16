var map = new maplibregl.Map({
    container: 'map',
    style: {
        version: 8,
        sources: {
            rtile: {
                type: 'raster',
                tiles: [
                    'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
                ],
                tileSize: 256,
                attribution:
                    "地図の出典：<a href='https://www.gsi.go.jp/' target='_blank'>地理院タイル</a>",
            },
        },
        layers: [
            {
                id: 'raster-tiles',
                type: 'raster',
                source: 'rtile',
                minzoom: 0,
                maxzoom: 22,
            },
        ],
    },
    center: [140.74067545139434, 41.804474335038584], // 中心座標
    zoom: 13, // ズームレベル
});
// コントロール
map.addControl(new maplibregl.NavigationControl(), 'bottom-right');
map.addControl(new maplibregl.ScaleControl(), 'bottom-left');
//map.addControl(new maplibregl.GeolocateControl(
//  {positionOptions: {enableHighAccuracy: true}, trackUserLocation: true}), 'top-right');

// 表示オプション
map.showTileBoundaries = true;
// map.showCollisionBoxes = true;
map.on('load', function () {
    /*     map.addSource('area', {
            type: 'geojson',
            data: './okawa.geojson',
        });
        map.addLayer({
            id: 'area',
            type: 'fill',
            source: 'area',
            paint:
                { 'fill-opacity': 0.2 },
    
        });
        map.on('click', 'area', (e) => {
            new maplibregl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(e.features[0].properties.地番)
                .addTo(map);
        }); */
    map.addSource('vector', {
        type: 'vector',
        tiles: ['https://atsu0919.github.io/hakodate_bluemap_maplibre/out/{z}/{x}/{y}.pbf'],
    });
    map.addLayer({
        id: 'vector',
        type: 'fill',
        source: 'vector',
        'source-layer': 'kamedahoncho',
        paint:
        { 'fill-opacity': 0.2 },

    });
});
