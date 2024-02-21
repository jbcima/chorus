import * as React from "react";
import formatTime from '../utils/formatTime';

const ProgressBar = ({
  progressBarRef,
  audioRef,
  timeProgress,
  duration,
}) => {
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  return (
    <p className="progress container">
      <span className="label time current">{formatTime(timeProgress)}</span>
      <input
        type="range"
        ref={progressBarRef}
        defaultValue="0"
        onChange={handleProgressChange}
      />
      <span className="label time">{formatTime(duration)}</span>
    </p>
  );
};

export default ProgressBar;