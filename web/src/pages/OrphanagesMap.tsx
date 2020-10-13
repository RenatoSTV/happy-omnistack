import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import "../styles/pages/orphanages-map.css";

import mapMarker from "../Images/map-marker.svg";

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarker} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :D</p>
        </header>

        <footer>
          <strong>Queimadas</strong>
          <span>Paraiba</span>
        </footer>
      </aside>

      <Map
        center={[-7.3662892, -35.9043105]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url={`https://a.tile.openstreetmap.org/{z}/{x}/{y}.png`} />
      </Map>
      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
