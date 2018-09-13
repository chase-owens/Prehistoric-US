import React from "react";

const Map = () => {
  return (
    <div className="map-wrapper">
      <div
        className="map-div"
        aria-labelledby="map-aria-description"
        role="application"
      >
        <div id="map" />
      </div>
      <label id="map-aria-description">Google Map</label>
    </div>
  );
};
export default Map;
