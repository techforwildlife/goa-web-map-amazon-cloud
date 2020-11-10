const map = new mapboxgl.Map({
  container: "map", // container id
  style: {
    version: 8,
    sources: {
      "raster-tiles": {
        type: "raster",
        tiles: ["a", "b", "c"].map(
          (abc) =>
            `https://${abc}.basemaps.cartocdn.com/rastertiles/dark_nolabels/{z}/{x}/{y}.png`
        ),
        tileSize: 256,
      },
    },
    layers: [
      {
        id: "simple-tiles",
        type: "raster",
        source: "raster-tiles",
        minzoom: 0,
        maxzoom: 22,
      },
    ],
  },
  center: [73.899731, 15.471554], // starting position
  zoom: 8, // starting zoom
});
