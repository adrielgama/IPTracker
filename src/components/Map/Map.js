import React from "react";
import mapboxgl from "mapbox-gl";

import "./Map.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWRyaWVsZ2FtYSIsImEiOiJja2k2dWltbTIwcHB6MnFvbDVsbHVienVoIn0.Nbrqoq94xpjZhUbKMchRHA";

function Map(props) {
  const mapContainerRef = React.useRef(null);
  const [zoom, setZoom] = React.useState(10);

  const { lat, lng } = props;
  console.log(props);

  //   const [lng, setLng] = React.useState("");
  //   const [lat, setLat] = React.useState("");

  
  React.useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      //   center: [-9.7968, -62.8488],
      zoom: zoom,
    });

    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    map.on("move", () => {
      map.getCenter().lng.toFixed(4);
      map.getCenter().lat.toFixed(4);
      setZoom(map.getZoom().toFixed(2));
    });

    return () => map.remove();
  }, []);

  return (
    <div>
      {/* <div className="sidebarStyle">
        <div>
          Latitude: {lat} | Longitude: {lng} | Zoom: {zoom}
        </div>
      </div> */}
      <div className="map-container" ref={mapContainerRef} />
    </div>
  );
}

export default Map;
