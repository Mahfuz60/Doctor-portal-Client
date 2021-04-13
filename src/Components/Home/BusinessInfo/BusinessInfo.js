import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faPhoneVolume,faMapMarkerAlt,faClock } from '@fortawesome/free-solid-svg-icons'

const BusinessInfo = () => {
    const infoData=[
        {
            title:'Opening Hour',
            description:'We are Opening 7 day',
            icon:faClock,
            background:'primary',
        },
        {
            title:'Visit our Location',
            description:'Brooklyn, NY-10036,USA',
            icon:faMapMarkerAlt,
            background:'dark',
        },
        {
            title:'Contact Us Now',
            description:'+8801222235544',
            icon:faPhoneVolume,
            background:'primary',
        }
    ]
    return (
        <section className='d-flex justify-content-center'>
           <div className='row w-75'>
                {
                    infoData.map(info=><InfoCard info={info}></InfoCard>)
                }
           </div>
            
        </section>
    );
};

export default BusinessInfo;