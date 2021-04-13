import React from "react";
import featureService from "../../../images/featureService.png";

const FeatureServices = () => {
  return (
    <section className=" featureService mt-5 align-items-center ">
      <div className='container'>
      <div className='row d-flex pd-5   '>
        <div className="col-md-5 mb-4 my-5 p-5 ">
          <img className='img-fluid  ms-5 w-100' src={featureService} alt="" />
        </div>
        <div className="col-md-6  align-self-center p-5 ">
          <h2 style={{fontWeight:'700', color:'#203047'}}>
            Exceptional Dental, <br /> Care on Your Terms
          </h2>
          <p className='text-secondary my-5 fs-6'>
            We understand that many patients are reluctant to visit the dentist
            due to dental anxiety. Some people put off the dental care they
            need. They often end up with decay or other oral health problems. We
            offer complimentary oral sedation if you have anxiety.Our dentists
            will explain the dental treatment you will receive before they
            begin. Always reassuring, that you feel comfortable. Here, you will
            feel special and cared for. We perform treatments gently and slowly.
          </p>
          <button className="btn btn-info mt-3">Learn More</button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default FeatureServices;
