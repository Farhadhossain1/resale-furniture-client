import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import DisplayCategories from '../DisplayCategories/DisplayCategories';

const Categories = () => {
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        setLoading(true);
        fetch('https://asm-used-server.vercel.app/categoryName')
        .then(res => res.json())
        .then(data =>{
            setLoading(false);
            setCategories(data)
        })
    }, [])
    return (
        <div>
            {loading ? <Loading></Loading> :  <>
            <h2 className='text-center mb-16 text-3xl text-primary font-bold'>All Categories</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-8'>
            {
                categories.map(category => <DisplayCategories
                key={category._id}
                category = {category}
                ></DisplayCategories> )
            }
        </div>
        </>}
        </div>
    );
};

export default Categories;