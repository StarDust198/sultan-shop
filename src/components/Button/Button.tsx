import {
  DetailedHTMLProps,
  FunctionComponent,
  HTMLAttributes,
  SVGProps,
} from 'react';
import cn from 'classnames';

import styles from './Button.module.css';

interface ButtonProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    'ref'
  > {
  link?: boolean;
  text?: string;
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>> | null;
}

export const Button = ({
  text,
  Icon,
  link,
  className,
  ...props
}: ButtonProps) => {
  const content = (
    <>
      {text && <span>{text}</span>}
      {Icon && <Icon className={styles.icon} />}
    </>
  );

  return link ? (
    <a className={cn(styles.button, className)} {...props}>
      {content}
    </a>
  ) : (
    <button className={cn(styles.button, className)} {...props}>
      {content}
    </button>
  );
};
