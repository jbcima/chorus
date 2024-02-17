import * as React from "react"
import { useEffect, useState } from "react"
import "../styles/style.css"
import useSound from "use-sound"

const Track = props => {
  const url = "//or-us.ch/file/"
  const [isHidden, setIsHidden] = useState(true);
  const selectTrack = () => {
    if (!isHidden && sound) {
      stop(); 
      sound.unload(); 
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
    setIsHidden((isVisible) => !isVisible);
  };
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop, pause, duration, sound }] = useSound('https://or-us.ch/c/S.Maria-Chorus-II-Nov-18-2023.mp3', {
    html5: true,   
    onend: function() {
      console.log('Finished!');
    }
  });
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
      <p className="p1 container track" onClick={selectTrack}>
      <span className="p1 s1 label">{props.artist}</span>
      <span className="text">{props.title ? ( ' ' + props.title ) : null }</span>
      </p>
      {!isHidden && 
      <div className="controls">
      <br />
        <p>{currTime.hr}:{currTime.min}:{currTime.sec}/{time.hr}:{time.min}:{time.sec}</p>
        {!isPlaying ? (
          <p className="playButton" onClick={playingButton}>Play</p>
        ) : (
          <p className="playButton" onClick={playingButton}>Pause</p>
        )}
        <p><a href={url + props.file} className="download">Download</a></p>
      </div>}
      <br />
    </React.Fragment>
  )
}

export default Track