import React from 'react';
import './DisplayProducts.css';




const DisplayProducts = ({product, setCategoryProduct}) => {
    const {name, image, location, old_price, origan_price, used_time, seller_name,post_time}= product;
    return (
              <div className="card w-full card-bg  shadow-xl">
  <figure><img className='h-96 w-full' src={image} alt="Shoes" /></figure>
  <div className="card-body">
<h2 className="card-title text-black text-2xl font-serif font-bold">{name}</h2>

    <div className='flex  justify-between'>
        <div>
            <h3 className='font-semibold'>Seller Name : {seller_name}</h3>
        </div>
        <div>
            <h3  className='font-semibold'>Location : {location} </h3>
        </div>
    </div>

    <div className='flex  justify-between'>
        <div>
            <h3  className='font-semibold'>Old Price : <strong className='text-gray-500'> {old_price}</strong></h3>
        </div>
        <div>
            <h3 className='font-semibold'>Origan Price : <strong> {origan_price}</strong> </h3>
        </div>
    </div>

    <div className='flex  justify-between'>
        <div>
            <h3  className='font-semibold'>Used Time : <strong>{used_time}</strong></h3>
        </div>
        <div>
            <h3  className='font-semibold'>Post Time : {post_time} </h3>
        </div>
    </div>
    <div className="card-actions justify-start">
      <label htmlFor="product-modal" 
      onClick={() => setCategoryProduct(product)}
      className="btn btn-sm button-bg">Buy Now</label>
    </div>
  </div>
</div>
    
    );
};

export default DisplayProducts;