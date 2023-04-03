import { Layout } from 'layout/Layout';
import { CatalogPage, ProductPage, CartPage } from 'pages';

function App() {
  return (
    <div className="App">
      <Layout>
        <CatalogPage />
        {/* <ProductPage /> */}
        {/* <CartPage /> */}
      </Layout>
    </div>
  );
}

export default App;
