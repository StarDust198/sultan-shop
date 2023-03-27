import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import { ReactComponent as CatalogIcon } from 'assets/catalog.svg';
import { ReactComponent as DownloadIcon } from 'assets/download.svg';
import { ReactComponent as MenuIcon } from 'assets/menu.svg';
import { ReactComponent as CloseIcon } from 'assets/close.svg';
import { ReactComponent as SearchIcon } from 'assets/search.svg';
import { Button, CallMe, Cart, Divider, Input, Logo } from 'components';
import { Container } from '../../Container/Container';

import styles from './HeaderMain.module.scss';
import { useMediaQuery } from 'hooks';

interface HeaderMainProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  switchMenu: () => void;
  menuOpen: boolean;
}

export const HeaderMain = ({
  switchMenu,
  menuOpen,
  className,
  ...props
}: HeaderMainProps) => {
  // const isXtraLarge = useMediaQuery('(min-width: 1321px)');
  const isLarge = useMediaQuery('(max-width: 1320px)');
  const isMedium = useMediaQuery('(max-width: 1100px)');
  const isSmall = useMediaQuery('(max-width: 820px)');
  const isXtraSmall = useMediaQuery('(max-width: 640px)');

  return (
    <div className={cn(styles.headerMain, className)} {...props}>
      <Container>
        <div className={styles.headerMainWrapper}>
          <Divider className={styles.headerMainDividerTop} />

          {isMedium && (
            <button className={styles.headerMainMenuBtn} onClick={switchMenu}>
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          )}

          <Logo className={styles.headerMainLogo} />

          <Button
            className={styles.headerMainCatalogBtn}
            Icon={CatalogIcon}
            text="Каталог"
            transparent={isSmall}
            link
          />

          {isSmall && (
            <Divider className={styles.headerMainDivider} angle="vertical" />
          )}

          {isSmall ? (
            <Button
              className={styles.headerMainInput}
              Icon={SearchIcon}
              text="Поиск"
              transparent
              link
            />
          ) : (
            <Input className={styles.headerMainInput} />
          )}

          {!isMedium && (
            <CallMe className={styles.headerMainCallMe} withImage={!isLarge} />
          )}

          {!isLarge && (
            <Divider className={styles.headerMainDivider} angle="vertical" />
          )}

          {!isMedium && (
            <Button
              className={styles.headerMainPriceBtn}
              Icon={DownloadIcon}
              text="Прайс-лист"
              link
            />
          )}

          {!isLarge && (
            <Divider className={styles.headerMainDivider} angle="vertical" />
          )}

          <Cart
            className={styles.headerMainCart}
            withInfo={(isSmall && !isXtraSmall) || !isLarge}
          />
        </div>
      </Container>
      <Divider className={styles.headerMainDividerBottom} />
    </div>
  );
};
