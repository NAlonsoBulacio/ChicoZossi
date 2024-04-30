import React from "react";
import "./GoogleMapEmbed.css";
const GoogleMapEmbed = () => {
  const apiKey = "AIzaSyBu-e2OBM1eyAudbRyVSa8spxztumlhlkc";
  const latitude = -26.352769735368284;
  const longitude = -65.95565860419246;
  const zoomLevel = 12; // Puedes ajustar este valor para cambiar el nivel de zoom

  const embedUrl = `https://www.google.com/maps/embed/v1/place?q=${latitude},${longitude}&zoom=${zoomLevel}&key=${apiKey}`;

  return (
    <div className="w-full flex flex-wrap justify-center items-center">
      <iframe
        className="mapa"
        title="Google Map"
        frameBorder="0"
        style={{ border: 0 }}
        src={embedUrl}
        allowFullScreen
      />
    </div>
  );
};

export default GoogleMapEmbed;
