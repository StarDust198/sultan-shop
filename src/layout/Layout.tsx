import { ReactNode } from 'react';

import { Container } from './Container';
import { Footer } from './Footer';
import { Header } from './Header';

import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <div className={styles.layout}>
    <Header />
    <Container>{children}</Container>
    <Footer className={styles.footer} />
  </div>
);
