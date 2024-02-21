import * as React from "react"
import { useState } from "react"
import ImageHover from './ImageHover';
import FileControls from './FileControls';
import "../styles/style.css"

const File = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  timeProgress,
  tracks,
  setTracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  isPlaying,
  setIsPlaying,
  item,
  index,
  album
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
          {item.tracks.map((track,i) => 
            <File
              {...{
                audioRef,
                progressBarRef,
                duration,
                setTimeProgress,
                timeProgress,
                tracks,
                setTracks,
                trackIndex,
                setTrackIndex,
                setCurrentTrack,
                isPlaying,
                setIsPlaying,
                item: track,
                index: i,
                album: index
              }}
            />
          )}
      </ul>
    );
  } else {
    children = (
      <FileControls {...{
          audioRef,
          progressBarRef,
          duration,
          timeProgress,
          setTimeProgress,
          isPlaying,
          setIsPlaying,
          item
        }}
      />
    );
  }
  return (
    <li>
      <ImageHover image={item.art} onShow={onShow} />
      <p className="p1 container track"  index={index} album={album} onClick={() => toggle()} onMouseEnter={() => setOnShow(() => true)} onMouseLeave={() => setOnShow(() => false)}>
      <span className="p1 s1 label">{item.artist}</span>
      <span className="text">{item.title ? ( ' ' + item.title ) : null }</span>
      </p>
      <br />
      {isOpen && children}
    </li>
  )
}

export default File