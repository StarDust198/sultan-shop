import { Container } from 'layout/Container';
import styles from './Footer.module.css';

interface FooterProps {}

export const Footer = ({}: FooterProps) => (
  <footer className={styles.footer}>
    <Container>Footer</Container>
  </footer>
);
