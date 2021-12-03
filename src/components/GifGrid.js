// import React, { useEffect, useState } from "react";
import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs"; 
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
//   const [Images, setImages] = useState([]);
  //ejecuta la funcion solo cuando cumple con la lista de dependencias
//   useEffect(() => {
//     getGifs(categories).then(setImages);
//   }, [categories]);
  
    const {data:images,loading} = useFetchGifs(category);
 
  return (
    <>    
    <h3 className="animate__animated animate__fadeInDown">{category}</h3>          
    {loading&&<p className="animate__animated animate__fadeInLeft">Loading...</p>}
      <div className="card-grid">
      
        {images.map((img) => (                        
            
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
