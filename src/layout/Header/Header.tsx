import { useState } from 'react';
import cn from 'classnames';

import { Divider } from 'components';
import { HeaderMain } from './HeaderMain';
import { Menu } from './Menu';
import { Container } from 'layout/Container';
import { Overlay } from 'layout/Overlay';

import styles from './Header.module.css';

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const switchMenu = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <Container>
          <Menu
            className={cn(styles.headerMenu, {
              [styles.headerMenuOpen]: menuOpen,
            })}
          />
        </Container>
        <Divider />
        <Container>
          <HeaderMain menuOpen={menuOpen} switchMenu={switchMenu} />
        </Container>
        <Divider />
      </header>
      {menuOpen && <Overlay />}
    </>
  );
};
