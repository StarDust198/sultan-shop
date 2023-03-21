import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import { ReactComponent as MapIcon } from './map.svg';
import { ReactComponent as MailIcon } from './mail.svg';
import { ReactComponent as PhoneIcon } from './phone.svg';

import styles from './Contact.module.css';

interface ContactProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  description: string;
  icon: 'phone' | 'map' | 'mail';
  subDescription?: string;
}

export const Contact = ({
  title,
  description,
  icon,
  subDescription,
  className,
  ...props
}: ContactProps) => {
  return (
    <div className={cn(styles.contact, className)} {...props}>
      {icon === 'phone' && <PhoneIcon className={styles.icon} />}
      {icon === 'map' && <MapIcon className={styles.icon} />}
      {icon === 'mail' && <MailIcon className={styles.icon} />}

      <div className={styles.text}>
        <span className={styles.bold}>{title}</span>
        {description}
        {subDescription && (
          <span className={styles.subDescription}>{subDescription}</span>
        )}
      </div>
    </div>
  );
};
