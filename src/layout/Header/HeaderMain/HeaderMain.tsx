import cn from 'classnames';

import { ReactComponent as LogoIcon } from '../../icons/logo.svg';
import { ReactComponent as CatalogIcon } from '../../icons/catalog.svg';
import { ReactComponent as DownloadIcon } from '../../icons/download.svg';
import { ReactComponent as MenuIcon } from '../../icons/menu.svg';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';
import { Button, CallMe, Cart, Divider, Input } from 'components';

import styles from './HeaderMain.module.css';
import { useMediaQuery } from 'hooks';

interface HeaderMainProps {
  switchMenu: () => void;
  menuOpen: boolean;
}

export const HeaderMain = ({ switchMenu, menuOpen }: HeaderMainProps) => {
  const isWide = useMediaQuery('(min-width: 1320px)');
  const isDesktop = useMediaQuery('(min-width: 1100px)');

  return (
    <div className={styles.headerMain}>
      {!isDesktop && (
        <button className={styles.headerMenuBtn} onClick={switchMenu}>
          <MenuIcon />
        </button>
      )}

      <LogoIcon />

      <Button
        className={styles.catalogBtn}
        Icon={menuOpen ? CatalogIcon : CloseIcon}
        text="Каталог"
        link
      />

      <Input className={styles.input} />

      {isDesktop && (
        <CallMe className={styles.headerCallMe} withImage={isWide} />
      )}

      {isWide && <Divider className={styles.divider} angle="vertical" />}

      {isDesktop && (
        <Button
          className={styles.priceBtn}
          Icon={DownloadIcon}
          text="Прайс-лист"
          link
        />
      )}

      {isWide && <Divider className={styles.divider} angle="vertical" />}

      <Cart className={styles.headerCart} withInfo={isWide || !isDesktop} />
    </div>
  );
};
