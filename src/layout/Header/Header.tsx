import { DetailedHTMLProps, HTMLAttributes, useState } from 'react';
import cn from 'classnames';

import { HeaderMain } from './HeaderMain/HeaderMain';
import { Menu } from './Menu/Menu';
import { Overlay } from '../Overlay/Overlay';

import styles from './Header.module.scss';

interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header = ({ className, ...props }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const switchMenu = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };

  return (
    <>
      <header className={cn(styles.header, className)} {...props}>
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
