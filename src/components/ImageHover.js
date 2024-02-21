import * as React from "react"
import { useState, useEffect, useRef } from 'react';
import "../styles/style.css"

const ImageHover = props => {
  const imageRef = useRef()
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  const mouseMove = (e) => {
    if(imageRef.current) {
      var width = -(e.pageX + imageRef.current.offsetLeft) / 50;
      var height = -(e.pageY + imageRef.current.offsetTop) / 50;
      setPosition({
        x: width,
        y: height
      });
    }
  };
  useEffect(() => {
    document.body.addEventListener('mousemove', mouseMove );

    return function cleanup() {
        window.removeEventListener('mousemove', mouseMove );
    } 
  })
  return (
      <>  
      <div className="image-hover-canvas">
        {props.onShow && props.image && 
          <div ref={imageRef} style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            backgroundImage: `url(${props.image})`,
          }} className="image-hover" />
        }
      </div>
      </>
  )
}

export default ImageHover