import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {

    const {data: buyers = []} = useQuery({
        queryKey: ["buyers"],
        queryFn: async() =>{
            try {
                const res = await fetch("http://localhost:5000/buyers");
                const data = res.json();
                return data;                 
            } catch (error) {
                console.log(error)
            }
        }
    }) 
    console.log(buyers)
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
        <td><button className='btn-sm delete-bg font-bold'>Delete</button></td>
      </tr>)}
    </tbody>
  </table>
</div>
        </div>
        </div>
    );
};

export default AllBuyers;