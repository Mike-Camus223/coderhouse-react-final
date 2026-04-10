import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import Catalog from './pages/Catalog/Catalog';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './pages/Checkout/Checkout.jsx';
import OrderSuccess from './pages/OrderSuccess/OrderSuccess.jsx';
import Error404 from './pages/error404/error404';
import Footer from './components/footer/footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Catalog />} />
          <Route path="/categoria/:categoriaId" element={<Category />} />
          <Route path="/producto/:slug" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orden/:orderId" element={<OrderSuccess />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
