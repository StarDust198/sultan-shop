import { useState } from 'react';
import cn from 'classnames';

import { HeaderMain } from './HeaderMain/HeaderMain';
import { Menu } from './Menu/Menu';
import { Overlay } from '../Overlay/Overlay';

import styles from './Header.module.scss';

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const switchMenu = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <Menu
          className={cn(styles.headerMenu, {
            [styles.headerMenuOpen]: menuOpen,
          })}
        />
        {/* <Divider /> */}
        <HeaderMain
          className={styles.headerMain}
          menuOpen={menuOpen}
          switchMenu={switchMenu}
        />
      </header>
      {menuOpen && <Overlay />}
    </>
  );
};
