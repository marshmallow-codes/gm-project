import React from "react";
import map from "../../assets/logos/Frame 8.svg"
import person from "../../assets/logos/dot.svg"
import './map.scss';

function Map(){
    return(
        <div className="map">
        <img className="map__area" src={map} alt="view of the map" />
        <img className="map__person" src={person} alt="" />
        </div>
    );
}

export default Map;