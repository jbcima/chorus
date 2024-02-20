import * as React from "react"
import { useState } from "react"
import Track from './Track';
import ImageHover from './ImageHover';
import "../styles/style.css"

const Album = ({
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
  const [onShow, setOnShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <React.Fragment>
      <ImageHover image={item.art} onShow={onShow} />
      <p className="p1 container track" onClick={toggle} onMouseEnter={() => setOnShow(() => true)} onMouseLeave={() => setOnShow(() => false)}>
        <span className="p1 s1 label">{item.artist}</span>
        <span className="text">{item.title ? ( ' ' + item.title ) : null }</span>
      </p>
      <br />
        <div>
          {
            item.tracks.map((track, key) => 
              <>
              <div style={{display: (isOpen) ? 'block' : 'none'}}>
                <Track 
                  {...{
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
                  item: track,
                  listIndex,
                  setListIndex,
                }}
                />
              </div>
              </>
          )}
        </div>
    </React.Fragment>
  )
}

export default Album