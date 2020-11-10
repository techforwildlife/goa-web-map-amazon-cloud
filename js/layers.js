const lineLayers = [
  {
    id: "goa_fc_lines",
    type: "line",
    source: "goa_fc_lines",
    "source-layer": "public.goa_fc_lines",
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-opacity": 0.6,
      "line-color": "red",
      "line-width": 1,
    },
  },
  {
    id: "goa_fc_ply",
    type: "line",
    source: "goa_fc_ply",
    "source-layer": "public.goa_fc_ply",
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-opacity": 0.4,
      "line-color": "blue",
      "line-width": 1,
    },
  },
  {
    id: "goa_ac_bounds",
    type: "line",
    source: "goa_ac_bounds",
    "source-layer": "public.goa_ac_bounds",
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-opacity": 0.4,
      "line-color": "orange",
      "line-width": 1,
    },
  },
  {
    id: "goa_villages",
    type: "line",
    source: "goa_villages",
    "source-layer": "public.goa_villages",
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-opacity": 0.4,
      "line-color": "green",
      "line-width": 1,
    },
  },
];

const circleLayers = [
  {
    id: "goa_inaturalist",
    type: "circle",
    source: "goa_inaturalist",
    "source-layer": "public.goa_inaturalist",
    paint: {
      "circle-color": "#6e599f",
      "circle-opacity": 0.3,
    },
  },
  {
    id: "goa_mines",
    type: "circle",
    source: "goa_mines",
    "source-layer": "public.goa_mines",
    paint: {
      "circle-color": "white",
      "circle-opacity": 0.3,
    },
  },
  {
    id: "goa_osm_placesofworship",
    type: "circle",
    source: "goa_osm_placesofworship",
    "source-layer": "public.goa_osm_placesofworship",
    paint: {
      "circle-color": "yellow",
      "circle-opacity": 0.3,
    },
  },
];

map.on("load", function () {
  lineLayers.forEach((layer) => {
    map.addLayer(layer);
  });
  circleLayers.forEach((layer) => {
    map.addLayer(layer);
  });
});
