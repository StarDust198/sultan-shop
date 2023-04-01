import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import { TabItem } from 'components/TabItem/TabItem';
import styles from './TabList.module.scss';

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
  return (
    <ul
      className={cn(styles.tabList, className, {
        [styles.tabListCards]: mode === 'cards',
        [styles.tabListLinks]: mode === 'links',
      })}
      {...props}
    >
      <TabItem mode={mode === 'links' ? 'link' : 'card'}>
        Гигиеническая продукция
      </TabItem>
      <TabItem mode={mode === 'links' ? 'link' : 'card'}>
        Гигиеническая продукция
      </TabItem>
      <TabItem mode={mode === 'links' ? 'link' : 'card'}>
        Гигиеническая продукция
      </TabItem>
      <TabItem mode={mode === 'links' ? 'link' : 'card'}>
        Гигиеническая продукция
      </TabItem>
      <TabItem mode={mode === 'links' ? 'link' : 'card'}>
        Гигиеническая продукция
      </TabItem>
      <TabItem mode={mode === 'links' ? 'link' : 'card'}>
        Уход за&nbsp;лицом
      </TabItem>
      <TabItem mode={mode === 'links' ? 'link' : 'card'}>
        Уход за&nbsp;лицом
      </TabItem>
      <TabItem mode={mode === 'links' ? 'link' : 'card'}>
        Уход за&nbsp;лицом
      </TabItem>
      <TabItem mode={mode === 'links' ? 'link' : 'card'}>
        Уход за&nbsp;лицом
      </TabItem>
      <TabItem mode={mode === 'links' ? 'link' : 'card'}>
        Уход за&nbsp;лицом
      </TabItem>
      <TabItem mode={mode === 'links' ? 'link' : 'card'}>
        Уход за&nbsp;лицом
      </TabItem>
    </ul>
  );
};
