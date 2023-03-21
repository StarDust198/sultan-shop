import cn from 'classnames';

import { ReactComponent as LogoIcon } from './logo.svg';
import { ReactComponent as CatalogIcon } from './catalog.svg';
import { ReactComponent as DownloadIcon } from './download.svg';

import styles from './HeaderMain.module.css';
import { Button, CallMe, Cart, Divider, Input } from 'components';

interface HeaderMainProps {}

export const HeaderMain = ({}: HeaderMainProps) => (
  <div className={styles.headerMain}>
    <div className={cn(styles.block, styles.blockOne)}>
      <LogoIcon />
      <Button
        className={styles.catalogBtn}
        Icon={CatalogIcon}
        text="Каталог"
        link
      />
      <Input className={styles.input} />
    </div>
    <div className={cn(styles.block, styles.blockTwo)}>
      <CallMe />
      <Divider className={styles.divider} angle="vertical" />
      <Button
        className={styles.priceBtn}
        Icon={DownloadIcon}
        text="Прайс-лист"
        link
      />
      <Divider className={styles.divider} angle="vertical" />
      <Cart />
    </div>
  </div>
);
