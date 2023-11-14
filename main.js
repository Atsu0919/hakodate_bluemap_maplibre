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
map.on('load', function () {
    map.addSource('tokyo_bus', {
        type: 'geojson',
        data: './kamedahoncho.geojson',
    });
    map.addLayer({
        id: 'tokyo_bus',
        type: 'fill',
        source: 'tokyo_bus',
        paint:
        {'fill-opacity': 0.2},

    });
});
