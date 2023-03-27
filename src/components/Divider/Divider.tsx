import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './Divider.module.scss';

interface DividerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {
  angle?: 'horizontal' | 'vertical';
}

export const Divider = ({
  angle = 'horizontal',
  className,
  ...props
}: DividerProps) => (
  <hr
    className={cn(styles.divider, className, {
      [styles.dividerVertical]: angle === 'vertical',
    })}
    {...props}
  />
);
