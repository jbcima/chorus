import * as React from "react"
import { useRef, useState, useEffect } from 'react';
import File from './File.js';
import DisplayTrack from './DisplayTrack.js';
import ProgressBar from './ProgressBar.js';
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
        track["album"] = item.title ? item.title : item.artist;
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
  const [progressBarTicks, setProgressBarTicks] = useState('');

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
      setActiveIndex(trackIndex + 1)
    }
  };
  const handlePrevious = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
      setActiveIndex(trackIndex - 1)
    }
  };
  useEffect(() => {
    navigator.mediaSession.setActionHandler(
      'nexttrack',
      () => { handleNext() }
    );
    navigator.mediaSession.setActionHandler(
        'previoustrack',
        () => { handlePrevious() }
    );
  });
  return (
    <>
    <ul>
      {props.content && props.content.map((item, i) => 
          <>
            <File
            {...{
              audioRef,
              progressBarRef,
              setProgressBarTicks,
              progressBarTicks,
              duration,
              setTimeProgress,
              timeProgress,
              tracks,
              trackIndex,
              setTrackIndex,
              currentTrack,
              setCurrentTrack,
              isPlaying,
              setIsPlaying,
              item,
              activeIndex,
              setActiveIndex,
              isOpen: activeIndex === i,
              index: i,
              key: i
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
        {...{ progressBarRef, progressBarTicks, audioRef, timeProgress, duration, isPlaying }}
      />
    </>
  )
}

export default Files