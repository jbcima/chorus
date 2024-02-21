import * as React from "react"
import { useRef, useState } from 'react';
import File from './File';
import DisplayTrack from './DisplayTrack';
import ProgressBar from './ProgressBar';
import "../styles/style.css"

const Files = props => {
  let tracks = [];
  props.content.map((item, index) => {
    if (item.type === "track") {
      item["index"] = index;
      tracks.push(item)
    }
    if (item.type === "album") {
      item.tracks.map((track, albumIndex) => {
        track["index"] = index + "_" + albumIndex;
        tracks.push(track)
      })
    }
  })
  const [activeIndex, setActiveIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(
    tracks[trackIndex]
  );
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // reference
  const audioRef = useRef();
  const progressBarRef = useRef();

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

  return (
    <>
    <ul>
      {props.content && props.content.map((item, i) => 
          <>
            <File
            {...{
              audioRef,
              progressBarRef,
              duration,
              setTimeProgress,
              timeProgress,
              tracks,
              trackIndex,
              setTrackIndex,
              setCurrentTrack,
              isPlaying,
              setIsPlaying,
              item,
              activeIndex,
              setActiveIndex,
              isOpen: activeIndex === i,
              index: i
            }}
            />
          </>
        )}
      </ul>
      <DisplayTrack
              {...{
                currentTrack,
                audioRef,
                setDuration,
                progressBarRef,
                handleNext
              }}
      />
      <ProgressBar
        {...{ progressBarRef, audioRef, timeProgress, duration }}
      />
    </>
  )
}

export default Files