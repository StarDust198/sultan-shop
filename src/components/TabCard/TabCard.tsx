import { DetailedHTMLProps, HTMLAttributes, ReactNode, useEffect } from 'react';
import cn from 'classnames';

import styles from './TabCard.module.scss';

interface TabCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

export const TabCard = ({ children, className, ...props }: TabCardProps) => {
  return (
    <div
      className={cn(styles.tabCard, className, {
        [styles.tabCardSmall]: typeof children === 'string',
        [styles.tabCardMedium]:
          typeof children === 'string' && children.length > 15,
        [styles.tabCardLarge]:
          typeof children === 'string' && children.length > 20,
      })}
      {...props}
    >
      {children}
    </div>
  );
};
