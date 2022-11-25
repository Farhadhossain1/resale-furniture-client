import React, { useEffect, useState } from 'react';
import DisplayCategories from '../DisplayCategories/DisplayCategories';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/categoryName')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2 className='text-center mt-16 text-3xl text-primary font-bold'>All Categories</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 justify-around my-16'>
            {
                categories.map(category => <DisplayCategories
                key={category._id}
                category = {category}
                ></DisplayCategories> )
            }
        </div>
        </div>
    );
};

export default Categories;