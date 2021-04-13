import React from "react";
import "./MakeAppointment.css";
import doctor from "../../../images/doctor.png";

const MakeAppointment = () => {
  return (
    <section className="make-appointment mt-5 ">
      <div className="container">
        <div className=" row ">
          <div className="col-md-5  ">
            <img src={doctor} alt="" />
          </div>
          <div className="appointment-text col-md-6 text-white py-5  ">
            <h4 className="text-info fw-bold">APPOINTMENT</h4>
            <h1 className="my-4 fw-bold">
              Make an appointment <br /> Today
            </h1>
            <p >
              A doctor appointment letter informs a patient that a doctors
              appointment has been set aside either by their request, by request
              of another doctor or medical professional or as part of an ongoing
              program of care.
            </p>

            <button className="btn btn-info mt-3">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
