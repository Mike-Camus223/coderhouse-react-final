import React from 'react';
import { useParams } from 'react-router-dom';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

const Category = () => {
  const { categoryId } = useParams();
  
  const getCategoryName = (category) => {
    const categoryNames = {
      'cafe': 'Café',
      'maquinas': 'Máquinas',
      'accesorios': 'Accesorios'
    };
    return categoryNames[category] || 'Categoría';
  };

  return (
    <div>
      {/* Pasamos categoryId para filtrar el listado */}
      <ItemListContainer 
        greeting={`Categoría: ${getCategoryName(categoryId)}`}
        categoryId={categoryId}
      />
    </div>
  );
};

export default Category;
