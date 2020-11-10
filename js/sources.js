const tileServerUrl = baseConfigs.tileServerUrl;

const lineSources = {
  goa_fc_lines: {
    type: "vector",
    tiles: [`${tileServerUrl}/public.goa_fc_lines/{z}/{x}/{y}.pbf`],
  },
  goa_ac_bounds: {
    type: "vector",
    tiles: [`${tileServerUrl}/public.goa_ac_bounds/{z}/{x}/{y}.pbf`],
  },
  goa_fc_ply: {
    type: "vector",
    tiles: [`${tileServerUrl}/public.goa_fc_ply/{z}/{x}/{y}.pbf`],
  },
  goa_villages: {
    type: "vector",
    tiles: [`${tileServerUrl}/public.goa_villages/{z}/{x}/{y}.pbf`],
  },
};

const circleSources = {
  goa_inaturalist: {
    type: "vector",
    tiles: [`${tileServerUrl}/public.goa_inaturalist/{z}/{x}/{y}.pbf`],
  },
  goa_mines: {
    type: "vector",
    tiles: [`${tileServerUrl}/public.goa_mines/{z}/{x}/{y}.pbf`],
  },
  goa_osm_placesofworship: {
    type: "vector",
    tiles: [`${tileServerUrl}/public.goa_osm_placesofworship/{z}/{x}/{y}.pbf`],
  },
};

map.on("load", function () {
  for (var sourceKey in lineSources) {
    map.addSource(sourceKey, lineSources[sourceKey]);
  }
  for (var sourceKey in circleSources) {
    map.addSource(sourceKey, circleSources[sourceKey]);
  }
});
