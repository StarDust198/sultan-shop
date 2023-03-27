import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import { Button, CallMe, Contact, Input, Logo } from 'components';
import { Container } from 'layout/Container/Container';
import { ReactComponent as DownloadIcon } from 'assets/download.svg';
import { ReactComponent as WhatsAppIcon } from 'assets/whatsapp.svg';
import { ReactComponent as TelegramIcon } from 'assets/telegram.svg';
import visa from 'assets/visa.png';
import mastercard from 'assets/mastercard.png';

import styles from './Footer.module.scss';

interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Footer = ({ className, ...props }: FooterProps) => (
  <footer className={cn(styles.footer, className)} {...props}>
    <Container>
      <div className={styles.footerWrapper}>
        <Logo className={styles.footerLogo} color="light" />

        <div className={styles.footerInfo}>
          <p className={styles.footerDescriprtion}>
            Компания «Султан» — снабжаем розничные магазины товарами
            "под&nbsp;ключ" в Кокчетаве и Акмолинской области
          </p>
          <div className={styles.footerSubscribe}>
            Подпишись на скидки и акции
          </div>
          <Input type="submit" className={styles.footerInput} />
        </div>

        <div className={styles.footerMenu}>
          <div className={styles.footerTitle}>Меню&nbsp;сайта:</div>
          <ul>
            <li className={styles.footerItem}>
              <a href="#">О компании</a>
            </li>
            <li className={styles.footerItem}>
              <a href="#">Доставка и оплата</a>
            </li>
            <li className={styles.footerItem}>
              <a href="#">Возврат</a>
            </li>
            <li className={styles.footerItem}>
              <a href="#">Контакты</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerCategory}>
          <div className={styles.footerTitle}>Категории:</div>
          <ul>
            <li className={styles.footerItem}>
              <a href="#">Бытовая химия</a>
            </li>
            <li className={styles.footerItem}>
              <a href="#">Косметика и гигиена</a>
            </li>
            <li className={styles.footerItem}>
              <a href="#">Товары для дома</a>
            </li>
            <li className={styles.footerItem}>
              <a href="#">Товары для детей и мам</a>
            </li>
            <li className={styles.footerItem}>
              <a href="#">Посуда</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerPrice}>
          <div className={styles.footerTitle}>Скачать прайс-лист:</div>
          <Button
            className={styles.footerPriceBtn}
            Icon={DownloadIcon}
            text="Прайс-лист"
            link
          />
        </div>

        <div className={styles.footerMessengers}>
          <div className={styles.footerMessengersTitle}>
            Связь в мессенджерах:
          </div>
          <div className={styles.footerMessengersLinks}>
            <a href="#">
              <WhatsAppIcon />
            </a>
            <a href="#">
              <TelegramIcon />
            </a>
          </div>
        </div>
        <div className={styles.footerContacts}>
          <div className={styles.footerTitle}>Контакты:</div>
          <CallMe withImage={false} align="left" color="white" />
          <Contact
            title="opt.sultan@mail.ru"
            description="На связи в любое время"
            color="white"
          />
          <div className={styles.footerPayments}>
            <img src={visa} alt="visa" />
            <img src={mastercard} alt="mastercard" />
          </div>
        </div>
      </div>
    </Container>
  </footer>
);
