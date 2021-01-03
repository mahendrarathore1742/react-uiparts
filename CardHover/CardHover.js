import React from "react";
import CardComponents from "./CardComponents";
const ImgTiles = props => {
  const Data = props.Data;

  return (
      <CardComponents Data={Data} />
  );
};

export default ImgTiles;
