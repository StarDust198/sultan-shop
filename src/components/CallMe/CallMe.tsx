import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from 'react';
import cn from 'classnames';

import service from 'assets/service.png';

import styles from './CallMe.module.scss';

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
      className={cn(styles.callMe, className, {
        [styles.callMeWithImage]: withImage,
        [styles.callMeWhite]: color === 'white',
        [styles.callMeLeft]: align === 'left',
      })}
      {...props}
    >
      <div className={styles.callMePhone}>+7 (777) 490-00-91</div>
      <div className={styles.callMeTime}>
        <span>время работы:</span> <span>9:00-20:00</span>
      </div>
      <button className={styles.callMeOrder}>Заказать звонок</button>
      {withImage && (
        <div
          className={cn(styles.callMeImg, {
            [styles.callMeOnline]: online,
          })}
        >
          <img src={service} alt="operator" />
        </div>
      )}
    </div>
  );
};
