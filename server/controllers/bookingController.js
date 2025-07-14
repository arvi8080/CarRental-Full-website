// Booking controller for backend API
// Add booking, get bookings, etc.
import Booking from '../models/Booking.js';

// Create a new booking
export const createBooking = async (req, res) => {
  try {
    const { car, startDate, endDate, totalPrice } = req.body;
    if (!car || !startDate || !endDate || !totalPrice) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }
    const booking = new Booking({
      user: req.user.id, // assumes auth middleware sets req.user
      car,
      startDate,
      endDate,
      totalPrice,
      status: 'pending',
    });
    await booking.save();
    res.status(201).json({ success: true, message: 'Booking created successfully.', booking });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// Get all bookings for the logged-in user
export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate('car');
    res.json({ success: true, bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};