import React from "react";
import { Link } from "react-router-dom";
import ImageCard from "../Atoms/ImageCard";

const Card = (props) => {
  const {image,id} = props;
  return (      
    <div style={{display: "flex", flexDirection: "column", alignItems: "left", justifyContent: "left", padding: "1px", color: "#000"}}>
      <Link to={`/details/${id}`} state= {{movieData: props}}>
      <ImageCard width="100%" height="350px" image={image}></ImageCard>
      </Link>        
    </div>
  )
}

export default Card