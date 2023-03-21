import { Divider } from 'components';
import { Contact } from '../../../components/Contact';
import styles from './Menu.module.css';

interface MenuProps {}

export const Menu = ({}: MenuProps) => (
  <div className={styles.menu}>
    <div className={styles.contacts}>
      <Contact
        title="г. Кокчетав, ул. Ж. Ташенова 129Б"
        description="(Рынок Восточный)"
        icon="map"
      />
      <Contact
        title="opt.sultan@mail.ru"
        description="На связи в любое время"
        icon="mail"
      />
      <Contact
        className={styles.phone}
        title="Отдел продаж"
        description="+7 (777) 490-00-91"
        icon="phone"
        subDescription="время работы: 9:00-20:00"
      />
    </div>
    <div className={styles.nav}>
      <a href="#" className={styles.navLink}>
        О компании
      </a>
      <Divider className={styles.divider} angle="vertical" />
      <a href="#" className={styles.navLink}>
        Доставка и оплата
      </a>
      <Divider className={styles.divider} angle="vertical" />
      <a href="#" className={styles.navLink}>
        Возврат
      </a>
      <Divider className={styles.divider} angle="vertical" />
      <a href="#" className={styles.navLink}>
        Контакты
      </a>
    </div>
  </div>
);
