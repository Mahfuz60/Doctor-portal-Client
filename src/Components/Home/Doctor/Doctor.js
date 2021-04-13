import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = ({doctor}) => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-3 w-75 h-75" src={doctor.pic} alt=""/>
            <h5>{doctor.name}</h5>
            <p> <FontAwesomeIcon className="text-info" icon={faPhoneAlt}/> {doctor.phone}</p>
        </div>
    );
};

export default Doctor;