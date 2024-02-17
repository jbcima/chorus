import * as React from "react"
import { useState, useEffect } from 'react';
import "../styles/style.css"

const ImageHover = props => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  const mouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY
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
        {props.onShow && 
          <div style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            backgroundImage: `url(${props.image})`,
          }} className="image-hover" />
        }
      </>
  )
}

export default ImageHover