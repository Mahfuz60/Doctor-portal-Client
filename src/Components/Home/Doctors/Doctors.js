import React from 'react';
import doctor1 from "../../../images/doctor1.png";
import doctor2 from "../../../images/doctor2.png";
import doctor3 from "../../../images/doctor3.png";
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const doctorData=[
        {
            pic:doctor1,
            name:'Dr. Emric Smith ',
            phone:"+9850025555"
        },
        {
            pic:doctor2,
            name:'Dr. Ema Watson',
            phone:"+9888054522"
        },
        {
            pic:doctor3,
            name:'Dr. Wilson Smith',
            phone:"+9850025533"
        }
    ]
    return (
        <section className="doctors py-5  ">
        <div className="container ">
            <h4 className="text-center  text-info mb-5 fw-bold">Our Doctors</h4>
            <div className="row">
                {
                    doctorData.map(doctor=><Doctor doctor={doctor}></Doctor>)
                }
                
            </div>
        </div>
    </section>
    );
};

export default Doctors;