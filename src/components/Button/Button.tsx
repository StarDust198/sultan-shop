import {
  DetailedHTMLProps,
  FunctionComponent,
  HTMLAttributes,
  SVGProps,
} from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

interface ButtonProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    'ref'
  > {
  size?: 'sm' | 'md';
  link?: boolean;
  text?: string;
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>> | null;
  transparent?: boolean;
}

export const Button = ({
  size = 'md',
  text,
  Icon,
  link,
  transparent = false,
  className,
  ...props
}: ButtonProps) => {
  const content = (
    <>
      {text && <span>{text}</span>}
      {Icon && <Icon className={styles.buttonIcon} />}
    </>
  );

  return link ? (
    <a
      className={cn(styles.button, className, {
        [styles.buttonTransparent]: transparent,
      })}
      {...props}
    >
      {content}
    </a>
  ) : (
    <button
      className={cn(styles.button, className, {
        [styles.buttonTransparent]: transparent,
        [styles.buttonSmall]: size === 'sm',
      })}
      {...props}
    >
      {content}
    </button>
  );
};
