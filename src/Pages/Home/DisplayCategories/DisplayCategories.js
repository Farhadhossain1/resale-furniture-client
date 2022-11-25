import React from 'react';
import { Link } from 'react-router-dom';
import './DisplayCategories.css';

const DisplayCategories = ({category}) => {
    const {category_name, image,category_id} = category;
    return (
        <Link to={`/categoryName/${category_id}`} className="card w-96 category-bg text-primary-content">
  <div className="card-body">
    <img className='w-28 mx-auto' src={image} alt="" />
    <div className="card-actions justify-center">
      <h3 className='text-2xl font-serif font-bold'>{category_name}</h3>
    </div>
  </div>
</Link>
    );
};

export default DisplayCategories;