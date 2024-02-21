import * as React from "react";
import { useState, useEffect, useRef, useCallback } from 'react';


const FileControls = ({
  audioRef,
  progressBarRef,
  setProgressBarTicks,
  duration,
  timeProgress,
  setTimeProgress,
  isPlaying,
  setIsPlaying,
  item
}) => {
  const url="https://or-us.ch/file/"

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(progressBarRef.current.value / duration) * 100}%`
    );
    let calculateTicks = Math.round((currentTime / duration) * 100)
    if(calculateTicks !=0) {
      setProgressBarTicks("-".repeat((calculateTicks / 100) * 33));
    } else { 
      setProgressBarTicks("")
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  return (
    <div className="controls">
      <p className="playButton" onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</p>
      <p><a href={url + item.file} className="download" download>Download</a></p>
      <br />
    </div>
  );
};

export default FileControls;