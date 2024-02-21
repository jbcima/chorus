import * as React from "react";
import { useEffect, useState } from 'react';
import formatTime from '../utils/formatTime';

const ProgressBar = ({
  progressBarRef,
  audioRef,
  timeProgress,
  duration,
}) => {
  const [ticks, setTicks] = useState('');
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
    let calculateTicks = Math.round(audioRef.current.currentTime)
    calculateTicks = Math.round((calculateTicks / 100) * 33)
    setTicks("-".repeat(calculateTicks))
    
  };
  useEffect(() => {
    audioRef.current.currentTime = progressBarRef.current.value;
    let calculateTicks = Math.round(audioRef.current.currentTime)
    calculateTicks = Math.round((calculateTicks / 100) * 33)
    setTicks("-".repeat(calculateTicks))
  }, [audioRef, duration, progressBarRef]);
  return (
    <div className="progress container">
      <span className="label time current">{formatTime(timeProgress)}</span>
      <div className="progress-bar">
        <p className="range-ticks">{ticks}</p>
        <input
          type="range"
          ref={progressBarRef}
          defaultValue="0"
          onChange={handleProgressChange}
        />
      </div>
      <span className="label time">{formatTime(duration)}</span>
    </div>
  );
};

export default ProgressBar;