import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from 'react';
import cn from 'classnames';

import service from './service.png';

import styles from './CallMe.module.css';

interface CallMeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  withImage?: boolean;
  color?: 'black' | 'white';
  align?: 'left' | 'right';
}

export const CallMe = ({
  withImage = true,
  color = 'black',
  align = 'right',
  className,
  ...props
}: CallMeProps) => {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    if (!withImage) return;
    const hours = new Date().getHours();

    if (hours >= 9 && hours < 20) {
      setOnline(true);
    } else {
      setOnline(false);
    }
  }, []);

  return (
    <div
      className={cn(styles.wrapper, className, {
        [styles.wrapperWithImage]: withImage,
        [styles.white]: color === 'white',
        [styles.left]: align === 'left',
      })}
      {...props}
    >
      <div className={styles.phone}>+7 (777) 490-00-91</div>
      <div className={styles.time}>
        <span>время работы:</span> <span>9:00-20:00</span>
      </div>
      <button className={styles.order}>Заказать звонок</button>
      {withImage && (
        <div
          className={cn(styles.img, {
            [styles.online]: online,
          })}
        >
          <img src={service} alt="operator" />
        </div>
      )}
    </div>
  );
};
