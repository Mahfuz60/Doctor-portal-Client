import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog,faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faPlus } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    return (
        <div>
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4 " style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li >
                    <Link to="/doctor/dashboard" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span> 
                    </Link>
                </li>
                <li >
                    <Link to="/doctor/appointment" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span> 
                    </Link>
                </li>
                <li >
                    <Link to="/doctor/prescriptions" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Doctor</span>
                    </Link>
                </li>
                <li >
                    <Link to="/doctor/patients" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                    </Link>
                </li>
                <li >
                    <Link to="/doctor/prescriptions" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
                    </Link>
                </li>
                <li className="">
                    <Link to="/doctor/setting" className="text-white text-decoration-none" >
                      <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white text-decoration-none"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
            
        </div>
    );
};

export default Sidebar;