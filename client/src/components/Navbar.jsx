import React, { useState } from 'react';
import {assets, menuLinks} from '../assets/assets';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

const menuVariants = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { type: 'spring', stiffness: 200, damping: 30 } },
  exit: { x: '100%', transition: { type: 'spring', stiffness: 200, damping: 30 } }
};

const Navbar = ({setShowLogin}) => {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();
  const { user, setUser } = useAppContext();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('token'); // Remove JWT or any auth token
    navigate('/');
  };

  return (
    <div className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600  border-borderColor relative transition-all  ${location.pathname === '/' && "bg-light"}`}
    >
      <Link to='/'>
      <img src={assets.logo} alt="logo" className="h-8" />

      </Link>
      <AnimatePresence>
        {(open || window.innerWidth >= 640) && (
          <motion.div
            key="menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-18 
                max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row 
                items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 
                transition-all duration-300 z-50 ${location.pathname === '/' ? 'bg-light' : 'bg-white'} ${
                  open ? 'max-sm:translate-x-0' : 'max-sm:-translate-x-full'
                }`}
            style={{ background: location.pathname === '/' ? '#f9fbfd' : '#fff' }}
          >

            {menuLinks.map((link, index) => (
              <Link to={link.path} key={index}>
                {link.name}

              </Link> 
            ))}
            <div className="hidden lg:flex items-center text-sm gap-2 border border-borderColor px-3 rounded-full max-w-56">
  <input
    type="text"
    className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
    placeholder="Search products"
  />
  <img src={assets.search_icon} alt="search" />
</div>
<div className='flex max-sm:flex-col gap-6 sm:items-center items-start'>
  <button onClick={() => navigate('/owner')} className='cursor-pointer'>Dashboard</button>
  {user ? (
    <button onClick={handleLogout} className='cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg'>Logout</button>
  ) : (
    <button onClick={() => setShowLogin('/owner')} className='cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg'>Login</button>
  )}
</div>



          </motion.div>
        )}
      </AnimatePresence>
      <button>
        <img
          src={open ? assets.close_icon : assets.menu_icon}
          alt="menu"
          className="h-6 cursor-pointer max-sm:block hidden"
          onClick={() => setOpen(!open)}
        />
      </button>
      

    </div>
  )
}

export default Navbar