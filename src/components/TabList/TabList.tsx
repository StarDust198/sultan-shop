import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectCategories, setCategory } from 'features/products/productsSlice';
import { TabItem } from 'components';

import styles from './TabList.module.scss';
import { CategoryKey } from 'interfaces';

interface TabListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  mode: 'cards' | 'links';
}

export const TabList = ({
  mode = 'links',
  className,
  ...props
}: TabListProps) => {
  const categories = useAppSelector(selectCategories);
  const dispatch = useAppDispatch();

  // const setCategory = (category: CategoryKey) => {
  //   dispatch(setCategory(category));
  // };

  return (
    <ul
      className={cn(styles.tabList, className, {
        [styles.tabListCards]: mode === 'cards',
        [styles.tabListLinks]: mode === 'links',
      })}
      {...props}
    >
      {Object.entries(categories).map((category) => (
        <TabItem
          key={category[0]}
          mode={mode === 'links' ? 'link' : 'card'}
          onClick={() => dispatch(setCategory(category[0] as CategoryKey))}
        >{`${category[1]}`}</TabItem>
      ))}
    </ul>
  );
};
