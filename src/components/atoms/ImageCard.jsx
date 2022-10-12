import * as React from "react";

const ImageCard = (props) => {
    const {width, height,image} = props;
    return(
        <div style={{width:`${width}`,height:`${height}`, backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center"}}></div>
    )
}

export default ImageCard;