import * as React from "react";
import setTrackMetadata from '../utils/setTrackMetadata.js';

const DisplayTrack = ({
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
  handleNext,
}) => {
  const url = "https://or-us.ch/file/"
  const onLoadedMetadata = () => {
    setTrackMetadata(currentTrack);
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <div>
      <audio
        src={url + currentTrack.file}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleNext}
      />
    </div>
  );
};
export default DisplayTrack;