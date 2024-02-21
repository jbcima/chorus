const formatTime = (time) => {
  if (time && !isNaN(time)) {
    const date = new Date(null);
    date.setSeconds(time);
    return date.toISOString().slice(12, 19);
  }
  return '0:00:00';
};

export default formatTime