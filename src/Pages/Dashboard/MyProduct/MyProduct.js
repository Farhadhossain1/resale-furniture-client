import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const MyProduct = () => {

    const { user } = useContext(AuthContext);
    const [deletingProduct, setDeletingProduct] = useState(null);
    const [advertiseItem, setAdvertiseItem] = useState(null);

    const advertiseCloseModal = () =>{
        setAdvertiseItem(null);
    }

    const closeModal = () => {
        setDeletingProduct(null);
    }

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://asm-used-server.vercel.app/products?email=${user?.email}`, {
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });

console.log(advertiseItem)
        
    const handleDeleteProduct = product => {
        fetch(`https://asm-used-server.vercel.app/products/${product._id}`, {
            method: 'DELETE', 
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`"${product.name}" deleted successfully`)
            }
        })
    }

    const handleAdvertiseProduct = (product) =>{
        fetch(`https://asm-used-server.vercel.app/advertise/${product._id}`, {
            method: 'PUT', 
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4  '>
                        {
                            products.map(product => <div className="card w-96 bg-base-100 shadow-xl mt-16 category-bg">
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
                                 <div className='flex justify-between'>
                                      <div>
                                      <label htmlFor='confirmation-modal' onClick={()=> setAdvertiseItem(product)} className='btn button font-bold text-black'>Advertise</label>
                                      </div>
                                      <div>
                                      <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn button text-black font-bold">Delete</label>
                                      </div>
                                 </div>
                            </div>
                          </div> )
                        }
                    </div>

            <div>
                
                {
                    deletingProduct &&
                    <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingProduct.name}. It cannot be undone.`}
                    successAction = {handleDeleteProduct}
                    successButtonName="Delete"
                    modalData = {deletingProduct}
                    closeModal = {closeModal}
                    ></ConfirmationModal>
                }
            </div>
            <div>
                {advertiseItem && 
                <ConfirmationModal
                title={`Are you sure you Advertise This Product?`}
                message={`If you Advertise ${advertiseItem.name}. It cannot be undone.`}
                successAction = {handleAdvertiseProduct}
                successButtonName="Advertise"
                modalData = {advertiseItem}
                closeModal = {advertiseCloseModal}
            ></ConfirmationModal>}
            </div>
        </div>
    );
};

export default MyProduct;