import React from "react";

const CardComponents = props => {
  const Data = props.Data;

  const data = Data.map((key, index) => {
    return (
     
        <div className="card" style={{ backgroundColor: key.Colors }}>
          <div className="content">
            <h2> {key.title}</h2>
            <p>{key.content} </p>
            <a href={key.link}>Read more</a>
          </div>
          <img src={key.src} alt="Img" />
        </div>
     
    );
  });

  return data;
};

export default CardComponents;
