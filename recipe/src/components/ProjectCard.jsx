import React from "react";
import RecipeCard from "./RecipeCard";
// import { useState } from 'react'
// import { useEffect } from 'react'
import recipe_data from "../recipe_data";
import "./ProjectCard.css";

const ncard = (val) => {
  return <RecipeCard key={val.id} title={val.title} imgsrc={val.imgsrc} />;
};

const ProjectCard = () => {
  //   const [Data,setData] = useState([]);      To fetch from Api store
  // //here we fetched data from api store
  //   useEffect(()=>{
  //     const fetchdata = async ()=>{

  //       try{
  //       const response =await fetch("https://fakestoreapi.com/products")
  //       const Data =await response.json();
  //       setData(Data);
  //       }

  //         catch(error){
  //           console.log("Error Fetching", error)
  //         }
  //         };
  //         fetchdata();
  //     },[]);

  return (
    //  <div  className='row gap-10px'>

    //   {recipe_data.map((val,index)=>(
    //     <div key ={val.id} className='col-md-4'>
    //       {ncard(val)}
    //     </div>

    //   ))}
    //   </div>

    <div className="RecipeArea">
      <div className="RecipeContainer">
        {recipe_data.map((val, index) => (
          <div key={val.id}>{ncard(val)}</div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
