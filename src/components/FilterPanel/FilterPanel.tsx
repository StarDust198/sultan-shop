import { DetailedHTMLProps, HTMLAttributes, useState } from 'react';
import cn from 'classnames';

import { useAppDispatch } from 'app/hooks';
import { setFilter } from 'features/products/productsSlice';
import { Button, BrandFilter, PriceFilter } from 'components';
import { ReactComponent as TrashIcon } from 'assets/trash.svg';
import { ReactComponent as ArrowIcon } from 'assets/arrow.svg';

import styles from './FilterPanel.module.scss';

interface FilterPanelProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const FilterPanel = ({ className, ...props }: FilterPanelProps) => {
  const [expanded, setExpanded] = useState(false);
  const [priceLow, setPriceLow] = useState<string>('');
  const [priceHigh, setPriceHigh] = useState<string>('');
  const [choosedBrands, setChoosedBrands] = useState<string[]>([]);

  const dispatch = useAppDispatch();

  const setAllFilters = () => {
    dispatch(
      setFilter({
        priceLow: priceLow ? +priceLow : null,
        priceHigh: priceHigh ? +priceHigh : null,
        brands: choosedBrands,
      })
    );
  };

  return (
    <div
      className={cn(styles.filterPanel, className, {
        [styles.filterPanelExpanded]: expanded,
      })}
      {...props}
    >
      <div className={styles.filterPanelHeader}>
        <h3 className={styles.filterPanelTitle}>ПОДБОР ПО ПАРАМЕТРАМ</h3>
        <Button
          className={styles.filterPanelExpand}
          Icon={ArrowIcon}
          size="xs-round"
          onClick={() => setExpanded((exp) => !exp)}
        />
      </div>

      <PriceFilter
        className={styles.filterPanelPrice}
        priceLow={priceLow}
        setPriceLow={setPriceLow}
        priceHigh={priceHigh}
        setPriceHigh={setPriceHigh}
      />
      <BrandFilter
        className={styles.filterPanelBrand}
        choosedBrands={choosedBrands}
        setChoosedBrands={setChoosedBrands}
      />

      <div className={styles.filterPanelButtons}>
        <Button text="Показать" onClick={setAllFilters} />
        <Button size="round" Icon={TrashIcon} />
      </div>
    </div>
  );
};
