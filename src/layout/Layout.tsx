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
    <Header className={styles.layoutHeader} />
    <main className={styles.layoutMain}>
      <Container>{children}</Container>
    </main>

    <Footer className={styles.layoutFooter} />
  </div>
);
