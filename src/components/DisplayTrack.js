import * as React from "react";

const DisplayTrack = ({
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
  handleNext,
}) => {
  const url = "https://or-us.ch/file/"
  const onLoadedMetadata = () => {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: currentTrack.title ? currentTrack.title : '',//t
      artist: currentTrack.artist ? currentTrack.artist : '',
      album: currentTrack.album ? currentTrack.album : '',
      artwork: [{ src: currentTrack.art ? currentTrack.art : '' }],
    });
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