import { useState, useEffect } from 'react';
import Stopper from './components/Stopper/Stopper';

const App = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState('');

  const start = () => {
    setTimer(
      setInterval(() => {
        setTime((time) => time + 1);
      }, 1)
    );
  };

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timer]);

  const stop = () => {
    clearInterval(timer);
  };
  const reset = () => {
    setTime(0);
  };

  return (
    <div className={'container'}>
      <Stopper time={time} />
      <button className={'button'} onClick={start}>
        Start
      </button>
      <button className={'button'} onClick={stop}>
        Stop
      </button>
      <button className={'button'} onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default App;
