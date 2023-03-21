import { Divider } from 'components';
import { HeaderMain } from './HeaderMain';
import { Menu } from './Menu';
import { Container } from 'layout/Container';

import styles from './Header.module.css';

interface HeaderProps {}

export const Header = ({}: HeaderProps) => (
  <header className={styles.header}>
    <Container>
      <Menu />
    </Container>
    <Divider />
    <Container>
      <HeaderMain />
    </Container>
    <Divider />
  </header>
);
