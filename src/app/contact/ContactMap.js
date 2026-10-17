"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LOCATIONS = [
  {
    name: "Smile Dental Clinics - Guntur",
    addr: "Brindavan Gardens, Guntur, Andhra Pradesh",
    lat: 16.3131,
    lng: 80.4186,
  },
  {
    name: "Smile Super Specialty Dental Hospital - Nellore",
    addr: "Ramesh Reddy Nagar, Nellore, Andhra Pradesh",
    lat: 14.4493,
    lng: 79.9872,
  },
  {
    name: "Smilax Dental Clinic - Thubrahalli",
    addr: "Varthur Main Rd, Thubrahalli, Bengaluru, Karnataka",
    lat: 12.9551,
    lng: 77.7193,
  },
  {
    name: "Smilax Dental Clinics - Bellandur",
    addr: "Soul Space Spirit Central Mall, Bellandur, Bengaluru, Karnataka",
    lat: 12.9266,
    lng: 77.6767,
  },
];

export default function ContactMap() {
  const ref = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!ref.current || mapRef.current) return;

    const map = L.map(ref.current, {
      scrollWheelZoom: false,
      zoomControl: true,
    });
    mapRef.current = map;

    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
      {
        attribution:
          'Tiles &copy; Esri &mdash; Source: Esri, OpenStreetMap contributors',
        maxZoom: 18,
      }
    ).addTo(map);

    const pin = L.divIcon({
      className: "sh-map-pin",
      html: '<span class="sh-map-pin__dot"></span>',
      iconSize: [22, 30],
      iconAnchor: [11, 30],
      popupAnchor: [0, -30],
    });

    const bounds = [];
    LOCATIONS.forEach((loc) => {
      L.marker([loc.lat, loc.lng], { icon: pin })
        .addTo(map)
        .bindPopup(`<strong>${loc.name}</strong><span>${loc.addr}</span>`);
      bounds.push([loc.lat, loc.lng]);
    });

    map.fitBounds(bounds, { padding: [28, 28] });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return <div ref={ref} className="sh-contact-map__leaflet" />;
}
