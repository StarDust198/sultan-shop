import { Layout } from 'layout/Layout';
import { CatalogPage, ProductPage, CartPage } from 'pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" Component={CatalogPage} />
            <Route path="/products/:productId" Component={ProductPage} />
            <Route path="/cart" Component={CartPage} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
