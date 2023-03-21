import { useEffect, useState } from 'react';
import cn from 'classnames';

import service from './service.png';

import styles from './CallMe.module.css';

interface CallMeProps {}

export const CallMe = ({}: CallMeProps) => {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    const hours = new Date().getHours();

    if (hours >= 9 && hours < 20) {
      setOnline(true);
    } else {
      setOnline(false);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.phone}>+7 (777) 490-00-91</div>
      <div className={styles.time}>
        <span>время работы:</span> <span>9:00-20:00</span>
      </div>
      <button className={styles.order}>Заказать звонок</button>
      <div
        className={cn(styles.img, {
          [styles.online]: online,
        })}
      >
        <img src={service} alt="operator" />
      </div>
    </div>
  );
};
