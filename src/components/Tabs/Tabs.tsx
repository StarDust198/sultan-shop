import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import { TabCard } from 'components/TabCard/TabCard';
import styles from './Tabs.module.scss';
import { ReactComponent as ArrowIcon } from 'assets/arrow.svg';

interface TabsProps {}

export const Tabs = ({}: TabsProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [inactiveArrow, setInactiveArrow] = useState<'left' | 'right' | null>(
    'left'
  );
  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    let elem = wrapperRef.current;

    const ro = new ResizeObserver((entries) => {
      if (elem) {
        for (let entry of entries) {
          // console.log(elem.scrollWidth, elem.offsetWidth);
          if (elem.scrollWidth > elem.offsetWidth + (showArrows ? 100 : 0)) {
            setShowArrows(true);
          } else {
            setShowArrows(false);
          }
        }
      }
    });

    if (elem) ro.observe(elem);

    return () => {
      if (elem) ro.unobserve(elem);
    };
  }, [showArrows]);

  const scrollLeft = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollBy({ left: -50, behavior: 'smooth' });
      if (wrapperRef.current.scrollLeft === 0) {
        setInactiveArrow('left');
      } else {
        setInactiveArrow(null);
      }
    }
  };

  const scrollRight = () => {
    if (wrapperRef.current) {
      wrapperRef.current?.scrollBy({ left: 50, behavior: 'smooth' });
      if (
        wrapperRef.current.scrollLeft + wrapperRef.current.offsetWidth >
        wrapperRef.current.scrollWidth - 5
      ) {
        setInactiveArrow('right');
      } else {
        setInactiveArrow(null);
      }
    }
  };

  return (
    <div className={styles.tabs}>
      {showArrows && (
        <TabCard
          className={cn(styles.tabsArrow, styles.tabsArrowLeft, {
            [styles.tabsArrowActive]: inactiveArrow !== 'left',
          })}
          onClick={inactiveArrow !== 'left' ? scrollLeft : undefined}
        >
          <ArrowIcon />
        </TabCard>
      )}

      <div className={styles.tabsWrapper} ref={wrapperRef}>
        <TabCard>Гигиеническая продукция</TabCard>
        <TabCard>Гигиеническая продукция</TabCard>
        <TabCard>Гигиеническая продукция</TabCard>
        <TabCard>Гигиеническая продукция</TabCard>
        <TabCard>Гигиеническая продукция</TabCard>
        <TabCard>Уход за&nbsp;лицом</TabCard>
        <TabCard>Уход за&nbsp;лицом</TabCard>
        <TabCard>Уход за&nbsp;лицом</TabCard>
        <TabCard>Уход за&nbsp;лицом</TabCard>
        <TabCard>Уход за&nbsp;лицом</TabCard>
        <TabCard>Уход за&nbsp;лицом</TabCard>
      </div>

      {showArrows && (
        <TabCard
          className={cn(styles.tabsArrow, styles.tabsArrowRight, {
            [styles.tabsArrowActive]: inactiveArrow !== 'right',
          })}
          onClick={inactiveArrow !== 'right' ? scrollRight : undefined}
        >
          <ArrowIcon />
        </TabCard>
      )}
    </div>
  );
};
