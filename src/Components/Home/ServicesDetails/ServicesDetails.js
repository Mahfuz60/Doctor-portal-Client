import React from 'react';

const ServicesDetails = ({service}) => {
    return (
        <div className='col-md-4 text-center'>
            <img style={{marginTop:'10px',height:'50px'}} src={service.pic} alt=""/>
            <h5 className='mt-4 mb-4 text-dark fw-bold'>{service.name}</h5>
            <p className='text-secondary'>{service.description}</p>
            
        </div>
    );
};

export default ServicesDetails;