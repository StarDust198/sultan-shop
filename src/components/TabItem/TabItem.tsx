import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

import styles from './TabItem.module.scss';

interface TabItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  children: string;
  mode: 'card' | 'link';
}

export const TabItem = ({
  mode = 'link',
  children,
  className,
  ...props
}: TabItemProps) => {
  console.log(children, typeof children);

  return (
    <li
      className={cn(className, {
        [styles.tabLink]: mode === 'link',
        [styles.tabCard]: mode === 'card',
        [styles.tabCardMedium]: mode === 'card' && children.length > 15,
        [styles.tabCardLarge]: mode === 'card' && children.length > 20,
      })}
      {...props}
    >
      {children}
    </li>
  );
};
