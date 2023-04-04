import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './ThanksMessage.module.scss';

interface ThanksMessageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ThanksMessage = ({ className, ...props }: ThanksMessageProps) => {
  return (
    <div className={cn(styles.thanksMessage, className)} {...props}>
      Спасибо за заказ!
    </div>
  );
};
