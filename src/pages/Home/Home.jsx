import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import Carousel from '../../components/Carousel/carousel';
import ProductCarousel from '../../components/carouselProducts/carouselProducts';

const Home = () => {
  return (
    <div>
      <Carousel />
      <div>
        {/* <ItemListContainer /> */}
        <div className="mt-12">
            <h2 className="text-4xl font-bold leading-tight text-center text-gray-700 uppercase scale-x-90">Nuestros Productos</h2>
            <div className="w-30 border-b-2 border-orange-700 mt-6 mx-auto"></div>
        </div>
         {/* CAROUSEL DE PRODUCTOS */}
      <ProductCarousel />
      </div>
    </div>
  );
};

export default Home;