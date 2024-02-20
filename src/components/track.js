import * as React from "react"
import { useEffect, useState } from "react"
import "../styles/style.css"
import ImageHover from './ImageHover';
import formatTime from '../utils/formatTime';

const Track = ({
  audioRef,
  progressBarRef,
  duration,
  timeProgress,
  setTimeProgress,
  tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  isPlaying,
  setIsPlaying,
  handleNext,
  item,
  listIndex,
  setListIndex,
}) => {
  const url="https://or-us.ch/file/"
  const index = listIndex;
  // setListIndex(listIndex + 1);
  const [onShow, setOnShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };
  return (
    <>
      <ImageHover image={item.art} onShow={onShow} />
      <p className="p1 container track" onClick={() => { setTrackIndex(index); setCurrentTrack(tracks[index])}} onMouseEnter={() => setOnShow(() => true)} onMouseLeave={() => setOnShow(() => false)}>
      <span className="p1 s1 label">{item.artist}</span>
      <span className="text">{item.title ? ( ' ' + item.title ) : null }</span>
      </p>
      <br />
      {item.isOpen && 
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
      }
    </>
  )
}

export default Track