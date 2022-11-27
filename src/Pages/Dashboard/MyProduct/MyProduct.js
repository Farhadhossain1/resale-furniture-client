import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import MyProductDisplay from '../MyProductDisplay/MyProductDisplay';

const MyProduct = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/products?email=${user?.email}`;

    const { data: products = [] } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data =  res.json();
            return data;
        }
    })
    console.log(products);



    return (
        <div>
            {
                products.map( product => <MyProductDisplay
                key={product._id}
                product ={product}
                ></MyProductDisplay>)
            }
        </div>
    );
};

export default MyProduct;