import * as React from "react";
import { useEffect, useState } from 'react';
import formatTime from '../utils/formatTime.js';

const ProgressBar = ({
  progressBarRef,
  progressBarTicks,
  audioRef,
  timeProgress,
  duration,
  isPlaying
}) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (isPlaying && !isActive) {
      setIsActive(true);
    }
  }, [isPlaying]);

  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };
  return (
    <div className="progress container" style={{ display: isActive ? " flex" : "none" }}>
      <span className="label time current">{formatTime(timeProgress)}</span>
      <div className="progress-bar">
        <p className="range-ticks">{progressBarTicks}</p>
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