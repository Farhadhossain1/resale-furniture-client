import React from 'react';
import './MyProductDisplay.css';

const MyProductDisplay = ({product}) => {
    const { old_price, origan_price, category_name, status, image} = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      <div className="font-bold text-2xl">{category_name}</div>
    </h2>
        <div className='flex justify-between'>
            <div>
                <h3 className=' font-semibold'>Old Price : {old_price}</h3>
            </div>
            <div>
                <h3 className=' font-semibold'>Origan Price: {origan_price}</h3>
            </div>
        </div>
        <div>
            <h3 className=' font-semibold'> Status : {status}</h3>
        </div>
       <div className='flex justify-between'>
            <div>
            <button className='btn button text-black'>Advertise</button>
            </div>
            <div>
            <button className='btn button text-black'>Delete</button>
            </div>
       </div>
  </div>
</div>
    );
};

export default MyProductDisplay;