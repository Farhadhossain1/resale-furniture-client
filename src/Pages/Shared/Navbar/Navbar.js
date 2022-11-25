import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo-icon/logo.png';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import './navbar.css';


const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);
  const handleLogOut = () =>{
    logOut()
    .then( () => {})
    .catch(err => {
      console.log(err);
    })
  }
    const menuItems = <>
                <li className='font-serif font-semibold'><Link to='/'>Home</Link></li>
                
                <li className='font-serif font-semibold'><Link to='/blog'>Blog</Link></li>
                { 
                user?.uid ?
                <li className='font-serif font-semibold'><button onClick={handleLogOut}>Sign Out</button></li>
                :
                <li className='font-serif font-semibold'><Link to='/login'>Login</Link></li>
                }
    </>
    return (
        <div className="navbar bg-light flex justify-between ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {
            menuItems
        }
      </ul>
    </div>
    <div>
    <div className="w-14 rounded-full">
          <img src={logo} alt='' />
        </div>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl font-mono"><span className='text-5xl font-bold text-red-900'>A</span>llform</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {
        menuItems
      }
    </ul>
  </div>
</div>
    );
};

export default Navbar;