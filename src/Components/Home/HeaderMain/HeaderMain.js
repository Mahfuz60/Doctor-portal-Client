import React from 'react';
import chair from '../../../images/chair.png';
const HeaderMain = () => {
    return (
       <main style={{height:'600px'}} className="row d-flex align-items-center">
           <div className="col-md-4 offset-md-1">
               <h1 style={{color:'#3A4256',fontWeight:'700'}}>Your New Smile <br/> Starts Here</h1>
               <p className='text-secondary'>Today's connected and busy medical practices can benefit greatly by adopting a patient portal or combined patient and doctor portal. The right software, system integration and security allows any practice to create one portal that benefits patients, physicians and other medical and administrative staff. </p>
              <button style={{color:'white',fontWeight:'600'}} className="btn btn-info">GET APPOINTMENT</button>


           </div>
           <div className="col-md-6">
              <img src={chair} alt="" className="img-fluid"/>
           </div>

       </main>
    );
};

export default HeaderMain;