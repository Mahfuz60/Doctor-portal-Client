import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
const bookingData = [
    {
       
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '10:50 AM - 11:30 AM',
        totalSpace: 10
    },
    {
        
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHour: '5:00 PM - 6:00 PM',
        totalSpace: 10
    },
    {
        
        id: 4,
        subject: 'Cavity Protection',
        visitingHour: '7:00 AM - 8:30 AM',
        totalSpace: 10
    },
    {
       
        id: 5,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
       
        id: 6,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    }
]

const BookAppointment = ({date}) => {
    return (
        <section>
            <h2 style={{textAlign:'center',color:'#18D2B2'}}>Available Appointments on {date.toDateString()} </h2>
           <div className='container'>
               <div className='row'>
                   {
                       bookingData.map(booking=><BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)
                   }

               </div>

           </div>
        </section>
    );
};

export default BookAppointment;