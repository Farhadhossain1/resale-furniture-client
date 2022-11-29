import React from 'react';

const AdvertiseCard = ({product}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mt-16 card-bg">
                            <figure><img src={product.image} alt="Shoes" /></figure>
                            <div className="card-body">
                              <h2 className="card-title">
                                <div className="font-bold text-2xl">{product.category_name}</div>
                              </h2>
                                  <div className='flex justify-between'>
                                      <div>
                                          <h3 className=' font-semibold'>Old Price : {product.old_price}</h3>
                                      </div>
                                      <div>
                                          <h3 className=' font-semibold'>Origan Price: {product.origan_price}</h3>
                                      </div>
                                  </div>
                                  <div>
                                      <h3 className=' font-semibold'> Status : {product.status}</h3>
                                  </div>
                    
                            </div>
                          </div>


        </div>
    );
};

export default AdvertiseCard;