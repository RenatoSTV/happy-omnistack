import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import "../styles/pages/orphanages-map.css";

import mapMarker from "../images/map-marker.svg";
import mapIcon from "../utils/mapIcon";

function OrphanagesMap() {
  useEffect(() => {
    
  }, []);

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

        <Marker 
        icon= {mapIcon}
          position={[-7.3662892, -35.9043105]}
        >
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
            Lar das Meninas
            <Link to="/orphanages/1">
              <FiArrowRight size={20} color="FFF" />
            </Link>
          </Popup>
        </Marker>
      </Map>
      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
