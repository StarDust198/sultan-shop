import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import { ReactComponent as VolumeIcon } from 'assets/volume.svg';
import { ReactComponent as WeightIcon } from 'assets/weight.svg';
import styles from './ProductSize.module.scss';

interface ProductSizeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  sizeType: 'weight' | 'volume';
  size: string;
}

export const ProductSize = ({
  sizeType,
  size,
  className,
  ...props
}: ProductSizeProps) => {
  return (
    <div className={cn(styles.productSize, className)} {...props}>
      {sizeType === 'weight' ? <WeightIcon /> : <VolumeIcon />}
      <span>{size}</span>
    </div>
  );
};
