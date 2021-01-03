import React from "react";
import TileHoverEffectComponents from "./TileHoverEffectComponents";

const TileHover = props => {
  return (
   
      <div className="conatinerTile">
        <TileHoverEffectComponents Tile={props.Tile} />
      </div>
    
  );
};

export default TileHover;
