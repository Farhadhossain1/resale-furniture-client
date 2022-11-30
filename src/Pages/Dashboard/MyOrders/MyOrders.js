import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const MyOrders = () => {


    const { user } = useContext(AuthContext);

    const url = `https://asm-used-server.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data =  res.json();
            return data;
        }
    })
 
    return (
        <div>
            <h1 className='text-3xl font-bold py-8 text-gray-600'>My Orders</h1>
            <div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
      <tr>
        <th></th>
        <th className='text-xl font-semibold'>Name</th>
        <th className='text-xl font-semibold'>Email</th>
        <th className='text-xl font-semibold'>Address</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;