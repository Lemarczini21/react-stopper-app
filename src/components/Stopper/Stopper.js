import styles from './Stopper.module.scss';

const Stoper = (props) => {
  const formatTime = (miliseconds) => {
    let ms = Math.floor(miliseconds % 100);
    let seconds = Math.floor((miliseconds / 100) % 60);
    let minutes = Math.floor((miliseconds / (100 * 60)) % 60);
    let hours = Math.floor((miliseconds / (100 * 60 * 60)) % 24);

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    ms = String(miliseconds).padStart(1, '0').slice(-3);

    return `${hours}:${minutes}:${seconds}.${ms}`;
  };

  return <div className={styles.stopper}>{formatTime(props.time)}</div>;
};

export default Stoper;
