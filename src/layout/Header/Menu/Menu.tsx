import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';
import { useMediaQuery } from 'hooks';

import { Button, Divider, Contact } from 'components';
import { ReactComponent as MapIcon } from 'assets/map.svg';
import { ReactComponent as MailIcon } from 'assets/mail.svg';
import { ReactComponent as PhoneIcon } from 'assets/phone.svg';
import { ReactComponent as DownloadIcon } from 'assets/download.svg';
import { ReactComponent as PhoneButtonIcon } from 'assets/phoneButton.svg';
import { Container } from 'layout/Container/Container';

import styles from './Menu.module.scss';

interface MenuProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Menu = ({ className, ...props }: MenuProps) => {
  // const isWide = useMediaQuery('(min-width: 1320px)');
  const isDesktop = useMediaQuery('(min-width: 1100px)');

  return (
    <div className={cn(styles.menu, className)} {...props}>
      <Container>
        <div className={styles.menuWrapper}>
          <div className={styles.menuContacts}>
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
              <>
                <Contact
                  className={styles.menuPhone}
                  title="Отдел продаж"
                  description="+7 (777) 490-00-91"
                  Icon={PhoneIcon}
                  subDescription="время работы: 9:00-20:00"
                />
                <div className={styles.menuPhoneOrder}>
                  <div className={styles.menuPhoneBtn}>
                    <PhoneButtonIcon />
                  </div>
                  <a href="#" className={styles.menuPhoneLink}>
                    Заказать звонок
                  </a>
                </div>
              </>
            )}
          </div>

          {!isDesktop && (
            <>
              <Divider className={styles.menuDividerHorizontal} />{' '}
              <div className={styles.menuNavTitle}>Меню сайта:</div>
            </>
          )}

          <nav className={styles.menuNav}>
            <a href="#" className={styles.menuNavLink}>
              О компании
            </a>
            {isDesktop && (
              <Divider className={styles.menuDivider} angle="vertical" />
            )}
            <a href="#" className={styles.menuNavLink}>
              Доставка и оплата
            </a>
            {isDesktop && (
              <Divider className={styles.menuDivider} angle="vertical" />
            )}
            <a href="#" className={styles.menuNavLink}>
              Возврат
            </a>
            {isDesktop && (
              <Divider className={styles.menuDivider} angle="vertical" />
            )}
            <a href="#" className={styles.menuNavLink}>
              Контакты
            </a>
          </nav>

          {!isDesktop && (
            <Button
              className={styles.menuPriceBtn}
              Icon={DownloadIcon}
              text="Прайс-лист"
              link
            />
          )}
        </div>
      </Container>
    </div>
  );
};
