import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllBuyers = () => {

  const [deleteBuyer, setDeleteBuyer] = useState(null);
  
  const closeBuyerModal = buyer =>{
      setDeleteBuyer(null);
  }

    const {data: buyers = [], refetch} = useQuery({
        queryKey: ["buyers"],
        queryFn: async() =>{
            try {
                const res = await fetch("https://asm-used-server.vercel.app/buyers");
                const data = res.json();
                return data;                 
            } catch (error) {
                console.log(error)
            }
        }
    }) 

    const handleDeleteBuyer = buyer =>{
      fetch(`https://asm-used-server.vercel.app/buyers/${buyer._id}`, {
        method: 'DELETE', 
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            refetch();
            toast.success(`"${buyer.name}" deleted successfully`)
        }
    })
    }
    return (
        <div>
             <div>
            <h1 className='text-3xl font-semibold text-gray-600'>All Buyers Details !!</h1>
            <div className="overflow-x-auto py-10">
  <table className="table w-full">

    <thead>
      <tr>
        <th></th>
        <th className='text-xl font-semibold'>Name</th>
        <th className='text-xl font-semibold'>Email</th>
        <th className='text-xl font-semibold'>Delete</th>
      </tr>
    </thead>
    <tbody>
        {buyers.map((buyer,i) => <tr key={buyer._id}>
        <th>{i+1}</th>
        <td className='font-bold'>{buyer.name}</td>
        <td className='font-bold'>{buyer.email}</td>
        <td><label htmlFor="confirmation-modal" onClick={()=>setDeleteBuyer(buyer)} className='btn delete-bg text-black font-bold'>Delete</label></td>
      </tr>)}
    </tbody>
  </table>
</div>
        </div>
        {deleteBuyer && <ConfirmationModal title={`Are you sure you want to delete?`}
                    message={`If you delete ${deleteBuyer.name}. It cannot be undone.`}
                    successAction = {handleDeleteBuyer}
                    successButtonName="Delete"
                    modalData = {deleteBuyer}
                    closeModal = {closeBuyerModal}></ConfirmationModal>}
        </div>
    );
};

export default AllBuyers;