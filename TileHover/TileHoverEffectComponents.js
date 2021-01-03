import React from "react";
const TileHoverEffectComponents = props => {
  const item = props.Tile;
  const data = item.map((key, index) => {
    return (
     
        <div
          className={
            index === 0 ? "clip clip1" : index === 1 ? "clip clip2" : "clip clip3"
          }
          style={{
            backgroundImage: "url(" + `"${key.src}"` + ")"
          }}
        >
          <div className="contentTile">
            <h2>{key.title}</h2>
            <p>{key.content}</p>
          </div>
        </div>
     
    );
  });

  return data;
};

export default TileHoverEffectComponents;
