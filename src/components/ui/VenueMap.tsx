"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const VENUE_POS: [number, number] = [23.1446, 113.2588];
const ZOOM = 16;

const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  "Vienna International Hotel, No. 603, Sanyuanli Avenue, Yuexiu, Guangzhou, Guangdong, China"
)}`;

const greenMarker = L.divIcon({
  html: `<div style="width:22px;height:22px;background:#47c34f;border-radius:50%;border:3px solid #ffffff;box-shadow:0 2px 10px rgba(0,0,0,0.45)"></div>`,
  className: "",
  iconSize: [22, 22],
  iconAnchor: [11, 11],
  popupAnchor: [0, -18],
});

export default function VenueMap() {
  return (
    <MapContainer
      center={VENUE_POS}
      zoom={ZOOM}
      style={{ width: "100%", height: "100%" }}
      scrollWheelZoom={false}
      zoomControl={true}
      attributionControl={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions" target="_blank" rel="noopener">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        subdomains="abcd"
        maxZoom={20}
      />
      <Marker position={VENUE_POS} icon={greenMarker}>
        <Popup>
          <div style={{ fontFamily: "system-ui, sans-serif", minWidth: "200px" }}>
            <p style={{ margin: "0 0 4px", fontWeight: 700, fontSize: "13px", color: "#111" }}>
              Vienna International Hotel
            </p>
            <p style={{ margin: "0 0 12px", fontSize: "11px", color: "#555", lineHeight: 1.45 }}>
              No. 603, Sanyuanli Avenue, Yuexiu,<br />
              Guangzhou, Guangdong, China
            </p>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#2ca640",
                color: "#fff",
                borderRadius: "6px",
                padding: "5px 14px",
                fontSize: "11px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Get Directions
            </a>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
