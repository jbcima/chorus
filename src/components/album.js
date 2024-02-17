
import * as React from "react"
import Track from './track.js';
import "../styles/style.css"

const Album = props => {
  return (
    <React.Fragment>
        <p className="p1 container track">
          <span className="p1 s1 label">{props.artist}</span>
          <span className="text">{props.title ? ( ' ' + props.title ) : null }</span>
        </p>
        <br />
        <div>
          {
            props.track.map((track, index) => 
              <>
                <Track 
                  {...track}      
                  key={props.index + '_' + index}
                  isOpen={props.activeIndex === props.index + '_' + index}
                  changeIndex={() => props.changeIndex(props.index + '_' + index)} 
                />
              </>
          )}
        </div>
    </React.Fragment>
  )
}

export default Album