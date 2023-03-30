import { PageRoute, PageTitle, Sort, Tabs, TopCategory } from 'components';
import { Layout } from 'layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <PageRoute routes={['Главная', 'Косметика и гигиена']} />
        <PageTitle title="Косметика и гигиена" />
        <Sort />
        <Tabs />
      </Layout>
    </div>
  );
}

export default App;
