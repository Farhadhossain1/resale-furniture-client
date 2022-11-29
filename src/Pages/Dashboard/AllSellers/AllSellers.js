import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import './AllSeller.css';



const AllSellers = () => {
  const [deleteSeller , setDeleteSeller ] =  useState(null);

  const  closeSellerModal = () =>{
    setDeleteSeller(null);
  }

     
    const {data: sellers = [], refetch} = useQuery({
        queryKey: ["sellers"],
        queryFn: async() =>{
            try {
                const res = await fetch("http://localhost:5000/sellers");
                const data = res.json();
                return data;                 
            } catch (error) {
                console.log(error)
            }
        }
    }) 


    const handleDeleteSeller = seller =>{
      fetch(`http://localhost:5000/sellers/${seller._id}`, {
        method: 'DELETE', 
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            refetch();
            toast.success(`"${seller.name}" deleted successfully`)
        }
    })
    }
    
    return (
        <div>
             <div>
            <h1 className='text-3xl font-semibold text-gray-600'>All Seller Details !!</h1>
            <div className="overflow-x-auto py-10">
  <table className="table w-full">

    <thead>
      <tr >
        <th></th>
        <th className='text-xl font-semibold'>Name</th>
        <th className='text-xl font-semibold'>Email</th>
        <th className='text-xl font-semibold'>Verify</th>
        <th className='text-xl font-semibold'>Delete</th>
      </tr>
    </thead>
    <tbody>
        {sellers.map((seller,i) => <tr key={seller._id}>
        <th>{i+1}</th>
        <td className='font-bold'>{seller.name}</td>
        <td className='font-bold'>{seller.email}</td>
        <td><button class=" btn-sm verify-bg  font-bold">Verify</button></td>
        <td><label htmlFor="confirmation-modal" onClick={()=>setDeleteSeller(seller)} className='delete-bg font-bold btn-sm'>Delete</label></td>
      </tr>)}
    </tbody>
  </table>
</div>
        </div>
                {deleteSeller && <ConfirmationModal title={`Are you sure you want to delete?`}
                    message={`If you delete ${deleteSeller.name}. It cannot be undone.`}
                    successAction = {handleDeleteSeller}
                    successButtonName="Delete"
                    modalData = {deleteSeller}
                    closeModal = {closeSellerModal}></ConfirmationModal>}
        </div>
    );
};

export default AllSellers;