import React from "react";
import map from "../../assets/logos/Frame 8.svg"
import './map.scss';

function Map(){
    return(
        <>
        <img className="map" src={map} alt="view of the map" />
        </>
    );
}

export default Map;