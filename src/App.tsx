import {
  CategoryLinks,
  FilterPanel,
  GoodsCard,
  PageRoute,
  PageTitle,
  Sort,
  Tabs,
} from 'components';
import { IProduct } from 'interfaces';

import { Layout } from 'layout/Layout';
import db from './db/goods.json';

function App() {
  const cards: IProduct[] = db as IProduct[];
  console.log(cards);

  return (
    <div className="App">
      <Layout>
        <PageRoute routes={['Главная', 'Косметика и гигиена']} />
        <PageTitle title="Косметика и гигиена" />
        <Sort />
        <Tabs />
        <FilterPanel />
        <CategoryLinks />
        {cards.map((card) => (
          <GoodsCard {...card} />
        ))}
      </Layout>
    </div>
  );
}

export default App;
