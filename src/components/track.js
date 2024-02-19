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
  handleNext,
  item
}) => {
  return (
    <>
      <ImageHover image={props.art} onShow={onShow} />
      <p className="p1 container track" onClick={selectTrack} onMouseEnter={() => setOnShow(() => true)} onMouseLeave={() => setOnShow(() => false)}>
      <span className="p1 s1 label">{props.artist}</span>
      <span className="text">{props.title ? ( ' ' + props.title ) : null }</span>
      </p>
      <br />
      {props.isOpen && 
        <div className="controls">
          <p>{currTime.hr}:{currTime.min}:{currTime.sec}/{time.hr}:{time.min}:{time.sec}</p>
          {!isPlaying ? (
            <p className="playButton" onClick={togglePlayPause}>Play</p>
          ) : (
            <p className="playButton" onClick={togglePlayPause}>Pause</p>
          )}
          <p><a href={url + props.file} className="download" download>Download</a></p>
          <br />
        </div>
      }
    </>
  )
}

export default Track