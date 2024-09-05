import React from 'react';
import Item from '../Item/Item';

const ItemList = ({productos} ) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 justify-center align-center'>
      {productos.map((el, index) => (
        <div key={el.id}>
          <Item 
            name={el.name}
            img={el.img}
            description={el.description}
            id={el.id}
            category={el.category}
            stock={el.stock}
            price={el.price}
          />
        </div>
      ))}
    </div>
  );
};

export default ItemList;