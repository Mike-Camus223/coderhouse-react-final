import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer';

const Detail = () => {
  return (
    <div className="container">
      {/* ItemDetailContainer maneja la lógica y pasa el producto a ItemDetail */}
      <ItemDetailContainer />
    </div>
  );
};

export default Detail;
