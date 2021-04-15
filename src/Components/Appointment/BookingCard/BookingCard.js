import React, { useState } from 'react';
import AppointmentFrom from '../AppointmentFrom/AppointmentFrom';

const BookingCard = ({booking,date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
     setIsOpen(true);
   }
   function closeModal(){
     setIsOpen(false);
  }
    return (
        <div className='col-md-4 mb-5 pt-5'>
            <div className='card p-3 '>
                <div className='card-body text-center'>
                    <h3  className="card-tittle text-brand">{booking.subject}</h3>
                     <h6>{booking.visitingHour}</h6>
                     <p>{booking.totalSpace} {" "}Spaces Available</p>
                     <button onClick={openModal}  className='btn btn-brand  text-uppercase text-white'>BOOK APPOINTMENT</button>
                     <AppointmentFrom modalIsOpen={modalIsOpen} date={date} closeModal={closeModal} appointmentOn={booking.subject}></AppointmentFrom>

                </div>

            </div>
            
        </div>
    );
};

export default BookingCard;