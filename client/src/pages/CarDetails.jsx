import React from 'react'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { assets, dummyCarData } from '../assets/assets';
import Loader from '../components/Loader';




const CarDetails = () => {

const {id} = useParams();
const navigate = useNavigate();
const [car, setCar] = useState(null);
const currency = import.meta.env.VITE_CURRENCY;
const handleSubmit = (e) => {
  e.preventDefault();
}

useEffect(() => {
  
  setCar(dummyCarData.find(car => (car._id) === id));
}, [id]);
  return car ? (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-16'>
      <button onClick={() => navigate(-1)} className='flex items-center gap-2 mb-6 text-gray-500 cursor-pointer'>
        <img src={assets.arrow_icon} alt='' className='rotate-180 opacity-65'/>
        Back to all cars
      </button>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'>
        {/* Left: Car Image & Details */}

        <div className='lg:col-span-2'>
          <img src={car.image} alt="" className='w-full h-auto md:max-h-100 object-cover rounded-lx mb-6 shadow-md' />
          <div className='space-y-6'>

            <div>
              <h1 className='text-3xl font-bold'>{car.brand} {car.model}</h1>
              <p>{car.category} . {car.year}</p>
            </div>
            <hr className='border-borderColor my-6' />

            <div className='grid grid-cols-4 sm:grid-cols gap-4'>
              {[
                {icon: assets.users_icon, text: `${car.seating_capacity} Seats`},
                {icon: assets.fuel_icon, text: car.fuel_type},
                {icon: assets.car_icon, text: car.transmission},
                   {icon: assets.location_icon, text: car.location},
                
                
              ].map(({icon, text}) => (
                <div key={text} className='flex flex-col items-center bg-light p-4 rounded-lg'>
                  <img src={icon} alt='' className='h-5 mb-2' />
                  {text}

                </div>

              ))}
              
            </div>

            {/* Description */}
            <div>
              <h1 className='text-xl font-medium mb-3'>Description</h1>
              <p className='text-gray-500'>{car.description}</p>
            </div>

            {/* Features */}


          </div>
          <h1 className='text-xl font-medium mb-3'>Description</h1>
         <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {["360 Camera", "Bluetooth", "GPS", "Heated Seats", "Rear View Mirror"].map(item => (
           <li key={item} className="flex items-center text-gray-500">
          <img src={assets.check_icon} alt="" className="h-4 mr-2" />
          {item}
    </li>
  ))}
</ul>


        </div>

        {/* Right: Booking Form */}
        <form onSubmit={handleSubmit} className='shadow-lg h-max strictly top-18 rounded-xl p-6 space-y text-gray-500'>

          <p className='flex items-center justify-between text-2xl text-gray-800 font-semibold'>{currency} {car.pricePerDay}<span className='text-base text-gray-400 font-normal'>per day</span></p>
          <hr className='border-borderColor my-6' />

          <div className='flex flex-col gap-2'>
            <label htmlFore="pickup-date" >Pickup Date</label>
            <input type='date'className='border border-borderColor px-3 py-3 rounded-lg' required id="pickup-date" min={new Date().toISOString().split('T')[0]}  />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFore="return-date" >Return Date</label>
            <input type='date'className='border border-borderColor px-3 py-3 rounded-lg' required id="return-date" />
          </div>
          <button className='w-full bg-primary hover:bg-primary-dull transition-all py-3 font-medium text-white rounded-xl cursor-pointer'>Book Now</button>

          <p className='text-center text-sm'>

No credit card required to reserve</p>

        </form>

      </div>

    </div>
  ) : <Loader />
}

export default CarDetails