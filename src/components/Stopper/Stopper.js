import styles from './Stopper.module.scss';

const Stoper = ({ time }) => {
  const formatTime = (miliseconds) => {
    let ms = Math.floor(miliseconds);
    let seconds = Math.floor((miliseconds / 1000) % 60);
    let minutes = Math.floor((miliseconds / (1000 * 60)) % 60);
    let hours = Math.floor((miliseconds / (1000 * 60 * 60)) % 24);

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    ms = String(miliseconds).padStart(3, '0').slice(-3);

    return `${hours}:${minutes}:${seconds}.${ms}`;
  };

  return <div className={styles.stopper}>{formatTime(time)}</div>;
};

export default Stoper;
