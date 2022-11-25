import React from 'react';
import './ProductModal.css';

const ProductModal = ({categoryProduct,setPro}) => {
    
    const {name,location, seller_name, old_price, origan_price, used_time, post_time ,category_name} = categoryProduct;

    const handleModalSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const location = form.location.value;
        const phone = form.phone.value;
        console.log(name,price,location,phone)
    }

    return (
        <>
        <input type="checkbox" id="product-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="product-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{category_name}</h3>
        <form onSubmit={handleModalSubmit} className='grid grid-cols-1 gap-5'>
        <input  type="text" name='name' value= {name} className="input input-bordered w-full " readOnly/>
        <input  type="text" name='price' value= {origan_price} className="input input-bordered w-full " readOnly />
        <input type="text" name='location' placeholder="Location" className="input w-full " />
        <input type="text" name='phone' placeholder="Conduct Number" className="input w-full " />
        <input className=' btn submit-bac' type="submit" value="Submit" />
        </form>
  </div>
</div>
            
        </>
    );
};

export default ProductModal;