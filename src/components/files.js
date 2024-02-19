import * as React from "react"
import { useRef, useState } from 'react';
import Track from './Track';
import Album from './Album';
import "../styles/style.css"

// import components
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';

const Files = props => {
  const tracks = [
    {
      title: 'Trinix ft Rushawn – Its a beautiful day',
      src: 'https://or-us.ch/file/S.Maria-Chorus-II-Nov-18-2023.mp3',
      author: 'Trinix ft Rushawn',
      thumbnail: 'https://raw.githubusercontent.com/Ibaslogic/react-audio-player/main/src/data/trinix.jpeg',
    },
    {
      title: 'Michael Jackson – We Are The World',
      src: 'https://or-us.ch/file/S.Maria-Chorus-II-Nov-18-2023.mp3',
      author: 'Michael Jackson',
      thumbnail: 'https://raw.githubusercontent.com/Ibaslogic/react-audio-player/main/src/data/jackson.jpeg',
    },
  ];
  // states
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
      <div className="audio-player">
        <div className="inner">
          <DisplayTrack
            {...{
              currentTrack,
              audioRef,
              setDuration,
              progressBarRef,
              handleNext,
            }}
          />
          <Controls
            {...{
              audioRef,
              progressBarRef,
              duration,
              setTimeProgress,
              tracks,
              trackIndex,
              setTrackIndex,
              setCurrentTrack,
              handleNext,
            }}
          />
          <ProgressBar
            {...{ progressBarRef, audioRef, timeProgress, duration }}
          />
        </div>
      </div>
    </>
  )
}

export default Files