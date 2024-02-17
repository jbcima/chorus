import * as React from "react"
import { useState } from "react"
import Track from './track.js';
import Album from './album.js';
import "../styles/style.css"

const Files = props => {
  const [activeIndex, setActiveIndex] = useState(null);
  const changeIndex = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <main>
      {props.content && props.content.map((item, index) => (
        item.type === "track" ? ( 
          <>
            <Track 
              {...item}      
              id={index}
              isOpen={activeIndex === index}
              changeIndex={value => changeIndex(value)} 
            />
          </>
        ) : 
        <>
        <Album 
            {...item}
            index={index}
            activeIndex={activeIndex}
            changeIndex={value => changeIndex(value)} 
            />
        </>
      ))}
    </main>
  )
}

export default Files