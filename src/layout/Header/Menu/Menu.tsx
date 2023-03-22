import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';
import { useMediaQuery } from 'hooks';

import { Button, Divider } from 'components';
import { Contact } from '../../../components/Contact';
import { ReactComponent as MapIcon } from '../../icons/map.svg';
import { ReactComponent as MailIcon } from '../../icons/mail.svg';
import { ReactComponent as PhoneIcon } from '../../icons/phone.svg';
import { ReactComponent as DownloadIcon } from '../../icons/download.svg';

import styles from './Menu.module.css';

interface MenuProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Menu = ({ className, ...props }: MenuProps) => {
  // const isWide = useMediaQuery('(min-width: 1320px)');
  const isDesktop = useMediaQuery('(min-width: 1100px)');

  return (
    <div className={cn(styles.menu, className)} {...props}>
      <div className={styles.contacts}>
        <Contact
          title="г. Кокчетав, ул. Ж. Ташенова 129Б"
          description="(Рынок Восточный)"
          Icon={MapIcon}
        />
        <Contact
          title="opt.sultan@mail.ru"
          description="На связи в любое время"
          Icon={MailIcon}
        />
        {!isDesktop && (
          <Contact
            className={styles.phone}
            title="Отдел продаж"
            description="+7 (777) 490-00-91"
            Icon={PhoneIcon}
            subDescription="время работы: 9:00-20:00"
          />
        )}
      </div>

      {!isDesktop && (
        <>
          <Divider className={styles.dividerHorizontal} />{' '}
          <div className={styles.navTitle}>Меню сайта:</div>
        </>
      )}

      <nav className={styles.nav}>
        <a href="#" className={styles.navLink}>
          О компании
        </a>
        {isDesktop && <Divider className={styles.divider} angle="vertical" />}
        <a href="#" className={styles.navLink}>
          Доставка и оплата
        </a>
        {isDesktop && <Divider className={styles.divider} angle="vertical" />}
        <a href="#" className={styles.navLink}>
          Возврат
        </a>
        {isDesktop && <Divider className={styles.divider} angle="vertical" />}
        <a href="#" className={styles.navLink}>
          Контакты
        </a>
      </nav>

      {!isDesktop && (
        <Button
          className={styles.priceBtn}
          Icon={DownloadIcon}
          text="Прайс-лист"
          link
        />
      )}
    </div>
  );
};
