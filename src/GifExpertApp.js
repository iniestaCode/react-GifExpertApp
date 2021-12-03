import React,{useState} from "react";
import { CategoryAdd } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  
  const [Categories, setCategories] = useState(["Naruto"])
//   const handlerAdd=(e)=>{
//         //setCounter ( (c)=>c-1);
//         setCategories ([...Categories,'Pokemon']);
//         //setCategories ((cates)=>[...cates,'Digimon'])
//   }
  return (
    <>
      <h2>GifExpertApp</h2>    
      <CategoryAdd setCategories={setCategories}/>  
      <hr />      
      <ol>
          {
            Categories.map(category => (
                <GifGrid  category={category} key={category}/>
            ))
          }
      </ol>
    </>
  );
};

export default GifExpertApp;
