import * as React from "react"
import { useState, useEffect } from 'react';
import "../styles/style.css"

const ImageHover = props => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  const mouseMove = (e) => {
    const width = (window.innerWidth / e.clientX) + 50;
    const height = (window.innerHeight / e.clientY) + 50;
    console.log (width + ' / ' + height)
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
            transform: `translate(-${position.x}%, -${position.y}%)`,
            backgroundImage: `url(${props.image})`,
          }} className="image-hover" />
        }
      </>
  )
}

export default ImageHover