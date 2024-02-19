import * as React from "react"
import { useEffect, useState } from "react"
import "../styles/style.css"
import ImageHover from './image-hover.js';
import useSound from "use-sound"

const Track = props => {
  const [onShow, setOnShow] = useState(false);
  const url = "//or-us.ch/file/"
  const selectTrack = () => {
    if (!props.isOpen && sound && !isPlaying) {
      play();
      setIsPlaying(true);
      props.changeIndex(props.id)
    }
    
  };
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound('://or-us.ch/file/' + props.file, {
    html5: true,
    preload: 'metadata',
    onend: function() {
      
    }
  });
  useEffect(() => {
    if (!props.isOpen) {
      pause();
      setIsPlaying(false);
    }
  }, [props.isOpen]);
  const playingButton = () => {
    if (isPlaying) {
      pause(); 
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };
  const [currTime, setCurrTime] = useState({
    hr: "00",
    min: "00",
    sec: "00",
  });
  const [seconds, setSeconds] = useState(); 
  const sec = duration / 1000;
  const min = String(Math.floor(sec / 60)).padStart(2, '0');
  const hr = String(Math.floor(duration / 3600000)).padStart(2, '0');
  const secRemain = String(Math.floor(sec % 60)).padStart(2, '0');
  const time = {
    hr: hr,
    min: min,
    sec: secRemain
  }
  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])); // setting the seconds state with the current state
        const hr = String(Math.floor(sound.seek([]) / 3600)).padStart(2, '0');
        const min = String(Math.floor(sound.seek([]) / 60)).padStart(2, '0');
        const sec = String(Math.floor(sound.seek([]) % 60)).padStart(2, '0');
        setCurrTime({
          hr,
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);
  return (
    <React.Fragment>
      <ImageHover image={props.art} onShow={onShow} />
      <p className="p1 container track" onClick={selectTrack} onMouseEnter={() => setOnShow(() => true)} onMouseLeave={() => setOnShow(() => false)}>
      <span className="p1 s1 label">{props.artist}</span>
      <span className="text">{props.title ? ( ' ' + props.title ) : null }</span>
      </p>
      <br />
      {props.isOpen && 
        <div className="controls">
          <p>{currTime.hr}:{currTime.min}:{currTime.sec}/{time.hr}:{time.min}:{time.sec}</p>
          {!isPlaying ? (
            <p className="playButton" onClick={playingButton}>Play</p>
          ) : (
            <p className="playButton" onClick={playingButton}>Pause</p>
          )}
          <p><a href={url + props.file} className="download" download>Download</a></p>
          <br />
        </div>
      }
    </React.Fragment>
  )
}

export default Track