import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayProducts from '../DisplayProducts/DisplayProducts';

const AllProducts = () => {
    const products = useLoaderData();
    console.log(products)
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:p-36'>
                {
                    products.map( product => <DisplayProducts
                    key={product._id}
                    product={product}
                    ></DisplayProducts>)
                }
        </div>
    );
};

export default AllProducts;