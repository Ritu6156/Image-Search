import React from "react";
import "./images.css"
 const Images = (props) => {
     const images = props.images.map((img) => {
        return <img src ={img.urls.regular}/>
     })
     return(
         <div className = "image-style">{images}</div>
     )
 }
 export default Images;
