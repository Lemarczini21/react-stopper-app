import styles from './Stopper.module.scss';
import { formatTime } from '../../utils/utils.js';

const Stoper = ({ time }) => {
  return <div className={styles.stopper}>{formatTime(time)}</div>;
};

export default Stoper;
