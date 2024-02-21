import * as React from "react"
import { useState, useEffect } from 'react';
import "../styles/style.css"

const ImageHover = props => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  const mouseMove = (e) => {
    const width = window.innerWidth / 2;
    const height = window.innerHeight / 2;
    setPosition({
      x: width,
      y: height
    });
  };
  useEffect(() => {
    document.body.addEventListener('mousemove', mouseMove );

    return function cleanup() {
        window.removeEventListener('mousemove', mouseMove );
    } 
  })
  return (
      <>  
        {props.onShow && props.image &&
          <div style={{
            backgroundImage: `url(${props.image})`,
          }} className="image-hover" />
        }
      </>
  )
}

export default ImageHover