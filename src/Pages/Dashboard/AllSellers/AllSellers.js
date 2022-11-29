import { useQuery } from '@tanstack/react-query';
import React from 'react';
import './AllSeller.css';



const AllSellers = () => {
    
    const {data: sellers = []} = useQuery({
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
        <td><button className='delete-bg font-bold btn-sm'>Delete</button></td>
      </tr>)}
    </tbody>
  </table>
</div>
        </div>
        </div>
    );
};

export default AllSellers;