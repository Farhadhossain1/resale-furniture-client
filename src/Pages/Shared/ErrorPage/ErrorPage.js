import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../../assets/errorPage/error.png';
import Navbar from '../Navbar/Navbar';

const ErrorPage = () => {
    return (
   <div>
    <Navbar></Navbar>

    <div className="card card-side lg:w-[650px] mx-auto mt-24 bg-red-200 shadow-xl">
  <figure><img className='w-full' src={error} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title text-red-500 text-5xl font-bold">404 <br />
    ErroR
    </h2>
    <p className='text-2xl font-bold'>We couldn't find the page !!!</p>
    <div className="card-actions justify-end">
      <Link to='/' className="btn button text-black text-xl font-bold ">Go To Back</Link>
    </div>
  </div>
</div>
   </div>
               
    );
};

export default ErrorPage;