import { ReactNode } from 'react';

import { Container } from './Container/Container';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <div className={styles.layout}>
    <Header />
    <Container>{children}</Container>
    <Footer className={styles.layoutFooter} />
  </div>
);
