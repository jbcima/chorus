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
  let tracks = [];
  props.content.map((item) => {
    if (item.type === "track") {
      tracks.push(item)
    }
    if (item.type === "album") {
      item.tracks.forEach(track => {
        tracks.push(track)
      })
    }
  })
  console.log('tracks')
  console.log(tracks)

  // states
  const [listIndex, setListIndex] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(
    tracks[trackIndex]
  );
  const [isPlaying, setIsPlaying] = useState(false);
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
    <main>
      {props.content && props.content.map((item, i) => 
        item.type === "track" ? ( 
          <>
            <Track
            {...{
              audioRef,
              progressBarRef,
              duration,
              timeProgress,
              setTimeProgress,
              tracks,
              trackIndex,
              setTrackIndex,
              setCurrentTrack,
              isPlaying,
              setIsPlaying,
              handleNext,
              item,
              listIndex,
              setListIndex,
            }}
            />
          </>
        ) : 
        <>
          <Album
              {...{
                audioRef,
                progressBarRef,
                duration,
                timeProgress,
                setTimeProgress,
                tracks,
                trackIndex,
                setTrackIndex,
                setCurrentTrack,
                isPlaying,
                setIsPlaying,
                item,
                listIndex,
                setListIndex,
              }}
          />
        </>
      )}
      <DisplayTrack
              {...{
                currentTrack,
                audioRef,
                setDuration,
                progressBarRef,
                handleNext
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
    </main>
  )
}

export default Files