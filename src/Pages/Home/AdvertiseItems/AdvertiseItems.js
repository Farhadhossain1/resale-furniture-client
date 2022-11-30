import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseCard from '../AdvertiseCard/AdvertiseCard';

const AdvertiseItems = () => {

    const {data: advertises = []} = useQuery({
        queryKey: ["advertises"],
        queryFn  : async() =>{
            try {
                const res = await fetch("https://asm-used-server.vercel.app/advertises");
                const data = res.json();
                return data;
            } catch (error) {
                console.log(error)
            }
        }
    })
    console.log(advertises)
    return (
        <div className=''>
            {advertises.length > 0 && <h1 className='text-3xl font-bold text-primary py-14 text-center'>Advertises Item</h1>}
            <div>
                {advertises.length > 0 && advertises.map(product => <AdvertiseCard key={product._id} product={product}></AdvertiseCard>)}
            </div>
        </div>
    );
};

export default AdvertiseItems;