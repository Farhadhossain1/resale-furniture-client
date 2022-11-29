import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import useAdmin from '../hook/useAdmin';
import useBuyer from '../hook/useBuyer';
import useSeller from '../hook/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayOut = () => {
  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer]  = useBuyer(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
<Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
   
      {/* <li><a>Sidebar Item 1</a></li> */}
      {isBuyer && <><li><Link className='text-xl font-semibold text-white bg-slate-700' to="/dashboard/buyer/myOrders">My Orders</Link></li>
      </>}
      
      {isSeller && <><li><Link className='text-xl font-semibold text-white bg-slate-700' to="/dashboard/seller/addProduct">Add Product</Link></li>
      <li><Link to="/dashboard/seller/myProducts">My Products</Link></li></>}
      
      {isAdmin && <><li><Link className='text-xl font-semibold text-white bg-slate-700' to="/dashboard/admin/allSellers">All Sellers</Link></li>
      <li><Link className='text-xl font-semibold text-white bg-slate-700 mt-4' to="/dashboard/admin/allBuyers">All Buyers</Link></li></>}
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayOut;