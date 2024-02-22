const setTrackMetadata = (track, metadata) => {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.title ? track.title : '',//t
      artist: track.artist ? track.artist : '',
      album: track.album ? track.album : '',
      artwork: [{ src: track.art ? track.art : '' }],
    });
};

export default setTrackMetadata