import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import Detail from './pages/Detail/Detail';
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
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="/item/:id" element={<Detail />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;