import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Cars from './pages/Cars';
import CarDetails from './pages/CarDetails';
import MyBookings from './pages/MyBookings';
import Footer from './components/Footer';
import Layout from './pages/Owner/Layout';
import Dashboard from './pages/Owner/Dashboard';
import AddCar from './pages/Owner/AddCar';
import ManageCars from './pages/Owner/ManageCars';
import ManageBookings from './pages/Owner/ManageBookings';




const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith('/owner');
  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/owner" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='add-car' element={<AddCar />} />
          <Route path='manage-cars' element={<ManageCars />} />
          <Route path='manage-bookings' element={<ManageBookings />} />

         
        </Route>
       
      </Routes>
     {!isOwnerPath && <Footer />}
    </>
  )
}
export default App;



