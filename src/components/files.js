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
              key={index}
              isOpen={activeIndex === index}
              changeIndex={() => changeIndex(index)} 
            />
          </>
        ) : 
        <>
            <Album 
            {...item}
            index={index}
            changechildIndex={(childIndex) => changeIndex(childIndex)} 
            />
        </>
      ))}
    </main>
  )
}

export default Files