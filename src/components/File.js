import * as React from "react"
import { useEffect, useState } from "react"
import "../styles/style.css"
import ImageHover from './ImageHover';
import FileControls from './FileControls';

const File = ({
  audioRef,
  duration,
  setTimeProgress,
  timeProgress,
  tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  item
}) => {
  const [onShow, setOnShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  let children = null;
  if (item.tracks && item.tracks.length) {
    children = (
      <ul>
          {item.tracks.map((track) => 
            <File
              {...{
                audioRef,
                duration,
                setTimeProgress,
                timeProgress,
                tracks,
                trackIndex,
                setTrackIndex,
                setCurrentTrack,
                item: track
              }}
            />
          )}
      </ul>
    );
  } else {
    children = (
      <FileControls {...{
          audioRef,
          duration,
          timeProgress,
          setTimeProgress,
          item
        }}
      />
    );
  }
  return (
    <li>
      <ImageHover image={item.art} onShow={onShow} />
      <p className="p1 container track" onClick={() => toggle(item.file)} onMouseEnter={() => setOnShow(() => true)} onMouseLeave={() => setOnShow(() => false)}>
      <span className="p1 s1 label">{item.artist}</span>
      <span className="text">{item.title ? ( ' ' + item.title ) : null }</span>
      </p>
      <br />
      {isOpen && children}
    </li>
  )
}

export default File