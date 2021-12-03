import React from "react";

export const GifGridItem = ({ id, title, url }) => {  
  return (          
      <div className="card animate__animated animate__lightSpeedInLeft">
        <img src={url} alt={title}></img>
        <p>Titulo: {title}</p>
      </div>
  );
};
