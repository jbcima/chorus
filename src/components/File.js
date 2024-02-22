import * as React from "react"
import { useState } from "react"
import ImageHover from './ImageHover.js';
import FileControls from './FileControls.js';
import "../styles/style.css"

const File = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  setProgressBarTicks,
  progressBarTicks,
  timeProgress,
  tracks,
  setTracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  isPlaying,
  setIsPlaying,
  activeIndex,
  setActiveIndex,
  isOpen,
  item,
  index
}) => {
  const [onShow, setOnShow] = useState(false);
  const [isOpenAlbum, setIsOpenAlbum] = useState(false);
  function toggle(rowIndex) {
    if(rowIndex === "album"){
      setIsOpenAlbum((isOpenAlbum) => !isOpenAlbum);
    } else if (isOpen === false) {
      setActiveIndex(rowIndex);
      setTrackIndex(rowIndex);
      setCurrentTrack(tracks[rowIndex]);
      setIsPlaying(true);
    } else if (isOpen === true) {
      setIsPlaying(false);
      audioRef.current.pause();
      setActiveIndex(-1)
    }
  }
  let children = null;
  if (item.tracks && item.tracks.length) {
    children = (
      <ul>
          {item.tracks.map((subItem,i) => 
            <File
              {...{
                audioRef,
                progressBarRef,
                duration,
                setTimeProgress,
                setProgressBarTicks,
                progressBarTicks,
                timeProgress,
                tracks,
                setTracks,
                trackIndex,
                setTrackIndex,
                setCurrentTrack,
                isPlaying,
                setIsPlaying,
                activeIndex,
                setActiveIndex,
                isOpen: activeIndex === tracks.findIndex((track) => track.index === index + "_" + i),
                item: subItem,
                index: tracks.findIndex((track) => track.index === index + "_" + i),
                key: index + "_" + i
              }}
            />
          )}
      </ul>
    );
    index = "album";
    isOpen = isOpenAlbum;
  } else {
    children = (
      <FileControls {...{
          audioRef,
          progressBarRef,
          setProgressBarTicks,
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
      <p className="p1 container track" index={index} onClick={() => toggle(index)} onMouseEnter={() => setOnShow(() => true)} onMouseLeave={() => setOnShow(() => false)}>
        <span className="label row">{item.artist}</span>
        <span className="text">{item.title ? ( ' ' + item.title ) : null }</span>
      </p>
      <br />
      {isOpen && children}
    </li>
  )
}

export default File