import { DetailedHTMLProps, HTMLAttributes, useState } from 'react';
import cn from 'classnames';

import { FieldFilterItem, Input } from 'components';
import { ReactComponent as SortIcon } from 'assets/sort.svg';

import styles from './BrandFilter.module.scss';
import { IBrand } from 'interfaces';
import { useAppSelector } from 'app/hooks';
import { selectBrands } from 'features/products/productsSlice';

interface BrandFilterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  choosedBrands: string[];
  setChoosedBrands: (brandArr: string[]) => void;
}

export const BrandFilter = ({
  choosedBrands,
  setChoosedBrands,
  className,
  ...props
}: BrandFilterProps) => {
  const [expanded, setExpanded] = useState(false);
  const [brandDisplayFilter, setBrandDisplayFilter] = useState('');

  const brands = useAppSelector(selectBrands);

  const filteredBrands = (brands: IBrand[]) => {
    return brands.filter((brand) =>
      brand.title.toLowerCase().includes(brandDisplayFilter.toLowerCase())
    );
  };

  const setBrand = (brand: string, checked: boolean) => {
    setChoosedBrands(
      checked
        ? [...choosedBrands, brand]
        : choosedBrands.filter((item) => item !== brand)
    );
  };

  return (
    <div className={cn(styles.brandFilter, className)} {...props}>
      <h5 className={styles.brandFilterTitle}>Производитель</h5>
      <Input
        className={styles.brandFilterSearch}
        type="search"
        sendValue={setBrandDisplayFilter}
      />

      <div className={styles.brandFilterItems}>
        {filteredBrands(brands).map((brand: IBrand, i: number) =>
          i < 4 || expanded ? (
            <FieldFilterItem
              key={brand.title}
              title={brand.title}
              quantity={brand.quantity}
              onChange={(e) => setBrand(brand.title, e.currentTarget.checked)}
              defaultChecked={choosedBrands.includes(brand.title)}
            />
          ) : null
        )}
      </div>

      <div
        onClick={() => setExpanded((expanded) => !expanded)}
        className={cn(styles.brandFilterExpand, {
          'd-none': brands.length < 4,
          [styles.expanded]: expanded,
        })}
      >
        <span>{expanded ? 'Скрыть все' : 'Показать все'}</span>
        <SortIcon />
      </div>
    </div>
  );
};
