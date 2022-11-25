import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayProducts from '../DisplayProducts/DisplayProducts';
import ProductModal from '../DisplayProducts/ProductModal/ProductModal';

const AllProducts = () => {
    const [categoryProduct, setCategoryProduct] = useState(null);
    const products = useLoaderData();
    console.log(products)
    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:p-36'>
                {
                    products.map( product => <DisplayProducts
                    key={product._id}
                    product={product}
                    setCategoryProduct={setCategoryProduct}
                    ></DisplayProducts>)
                }
        </div>
                {
                    categoryProduct &&
                    <ProductModal
                    categoryProduct ={categoryProduct}
                ></ProductModal>
                }
        </section>
    );
};

export default AllProducts;