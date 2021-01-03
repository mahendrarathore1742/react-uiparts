import React from "react";
import CardEffectComponents from "./CardEffectComponents";

const CardEffect = props => {
  return (
   
      <div className="containerdata">
        <CardEffectComponents Data={props.Data} />
      </div>
   
  );
};

export default CardEffect;
