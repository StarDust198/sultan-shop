import {
  DetailedHTMLProps,
  FunctionComponent,
  HTMLAttributes,
  SVGProps,
} from 'react';
import cn from 'classnames';

import styles from './Contact.module.css';

interface ContactProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  description: string;
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>> | null;
  color?: 'black' | 'white';
  subDescription?: string;
}

export const Contact = ({
  title,
  description,
  Icon = null,
  color = 'black',
  subDescription,
  className,
  ...props
}: ContactProps) => {
  return (
    <div className={cn(styles.contact, className)} {...props}>
      {Icon && <Icon className={styles.icon} />}

      <div
        className={cn(styles.text, {
          [styles.white]: color === 'white',
        })}
      >
        <span className={styles.bold}>{title}</span>
        {description}
        {subDescription && (
          <span className={styles.subDescription}>{subDescription}</span>
        )}
      </div>
    </div>
  );
};
