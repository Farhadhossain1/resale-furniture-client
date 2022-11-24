import React from 'react';
import './DisplayCategories.css';

const DisplayCategories = ({category}) => {
    const {category_name, image} = category;
    return (
        <div className="card w-96 category-bg text-primary-content">
  <div className="card-body">
    <img className='w-28 mx-auto' src={image} alt="" />
    <div className="card-actions justify-center">
      <h3 className='text-2xl font-serif font-bold'>{category_name}</h3>
    </div>
  </div>
</div>
    );
};

export default DisplayCategories;