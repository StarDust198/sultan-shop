import { SVGProps } from 'react';
import cn from 'classnames';

import { ReactComponent as LogoIcon } from 'assets/logo.svg';

import styles from './Logo.module.scss';

interface LogoProps extends SVGProps<SVGSVGElement> {
  color?: 'dark' | 'light';
}

export const Logo = ({ color = 'dark', className, ...props }: LogoProps) => (
  <LogoIcon
    className={cn(styles.logo, className, {
      [styles.logoLight]: color === 'light',
    })}
    {...props}
  />
);
