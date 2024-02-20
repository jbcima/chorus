import * as React from "react"
import { useEffect, useState } from "react"
import "../styles/style.css"
import ImageHover from './ImageHover';
import formatTime from '../utils/formatTime';

const File = ({
  duration,
  timeProgress,
  tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  isPlaying,
  setIsPlaying,
  item
}) => {
  const url="https://or-us.ch/file/"
  const [onShow, setOnShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  }
  let children = null;
  if (item.tracks && item.tracks.length) {
    children = (
      <ul>
          {item.tracks.map((track) => 
            <File
              {...{
                duration,
                timeProgress,
                tracks,
                trackIndex,
                setTrackIndex,
                setCurrentTrack,
                isPlaying,
                setIsPlaying,
                item: track
              }}
            />
          )}
      </ul>
    );
  } else {
    children = (
      <div className="controls">
        <p>{formatTime(timeProgress)}/{formatTime(duration)}</p>
        {!isPlaying ? (
          <p className="playButton" onClick={() => togglePlayPause}>Play</p>
        ) : (
          <p className="playButton" onClick={() => togglePlayPause}>Pause</p>
        )}
        <p><a href={url + item.file} className="download" download>Download</a></p>
        <br />
      </div>
    );
  }
  return (
    <li>
      <ImageHover image={item.art} onShow={onShow} />
      <p className="p1 container track" onClick={toggle} onMouseEnter={() => setOnShow(() => true)} onMouseLeave={() => setOnShow(() => false)}>
      <span className="p1 s1 label">{item.artist}</span>
      <span className="text">{item.title ? ( ' ' + item.title ) : null }</span>
      </p>
      <br />
      {isOpen && children}
    </li>
  )
}

export default File