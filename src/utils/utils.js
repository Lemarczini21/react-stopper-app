export function formatTime(miliseconds) {
  let ms = Math.floor(miliseconds % 1000);
  let seconds = Math.floor((miliseconds / 1000) % 60);
  let minutes = Math.floor((miliseconds / (1000 * 60)) % 60);
  let hours = Math.floor((miliseconds / (1000 * 60 * 60)) % 24);

  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');
  ms = String(ms).padStart(3, '0');

  return `${hours}:${minutes}:${seconds}.${ms}`;
}
