import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import './ProductModal.css';

const ProductModal = ({categoryProduct,setCategoryProduct, refetch}) => {
    const { user } = useContext(AuthContext);
    console.log(user)
    
    const {name, origan_price, used_time, post_time ,category_name} = categoryProduct;

    const handleModalSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const location = form.location.value;
        const phone = form.phone.value;
        console.log(name,price,location,phone);

        const productBooking = {
           productName : name,
            price: origan_price,
            useTime: used_time,
            postTime: post_time,
            email: user?.email,
            name: user?.displayName,
            phone,
            location
            
        }
        console.log(productBooking);
   
        

        fetch('https://asm-used-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productBooking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCategoryProduct(null);

                toast.success('Product Booking is confirmed')
              
            })

    }

    return (
        <>
        <input type="checkbox" id="product-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative modal-bg ">
    <label htmlFor="product-modal" className="btn btn-sm btn-circle absolute bg-red-700 hover:bg-red-600 right-2 top-2">✕</label>
    <h3 className="text-3xl text-black font-bold text-center py-6">{category_name}</h3>
        <form onSubmit={handleModalSubmit} className='grid grid-cols-1 gap-5'>
        <input  type="text" name='name' disabled value= {name} className="input input-bordered w-full font-bold" readOnly/>
        <input  type="text" name='price' disabled value= {origan_price} className="input input-bordered w-full font-bold" readOnly />
        <input  type="text" name='disName' disabled value= {user?.displayName} className="input input-bordered w-full font-bold" readOnly />
        <input  type="email" name='email' disabled value= {user?.email} className="input input-bordered w-full font-bold" readOnly />
        <input type="text" name='location' placeholder="Location" className="input w-full font-bold" />
        <input type="text" name='phone' placeholder="Conduct Number" className="input w-full font-bold" />
        <input className=' btn btn-active btn-primary font-bold' type="submit" value="Submit" />
        </form>
  </div>
</div>
            
        </>
    );
};

export default ProductModal;