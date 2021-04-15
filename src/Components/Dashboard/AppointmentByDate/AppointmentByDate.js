import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentByDate = ({appointments}) => {
    console.log(appointments)
    return (
        <div>
            <h2 className="text-brand text-center mt-3">Appointments</h2>
            {
                appointments.length ?
                <AppointmentShortList appointments={appointments}></AppointmentShortList>
                :
                <div className="p-3">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
        </div>
    );
};

export default AppointmentByDate;