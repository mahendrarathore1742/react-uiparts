import React from "react";
const CardEffectComponents = props => {
  const item = props.Data;

  const data = item.map((key, index) => {
    return (
    
        <div className="carddata" style={{ backgroundColor: key.Colors }}>
          <div className="imgBxdata">
            <img src={key.src} className="Imagesdata" alt="img" />
          </div>
          <div className="contentdata">
            <h2>{key.title}</h2>
            <p>{key.content}</p>
          </div>
        </div>
    
    );
  });
  return data;
};
export default CardEffectComponents;
