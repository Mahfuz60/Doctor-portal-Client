import React from "react";
import john from "../../../images/john.png";
import emri from "../../../images/emri.png";
import wilson from "../../../images/wilson.png";
import "./Testimonials.css";
import TestimonialCart from "../TestimonialCart/TestimonialCart";

const Testimonials = () => {
  const testimonialData = [
    {
      description:
        "Dr. John Smith, MD is a Internal Medicine Specialist in Houston, TX.  He is affiliated with HCA Houston Healthcare West.  He is accepting new patients and has indicated that he accepts telehealth appointments and holistic approach to caring for patients with pain-related problems.",
      pic: john,
      name: "John Smith",
      from: "California",
    },
    {
      description:
        "Dr Emri White is a consultant in Pain Medicine, with over 20 years’ experience in his field. Previously a Consultant at St Barts and The Royal London Hospitals, he is now firmly established in the independent sector. His breadth of experience ultimately resulted in him recognising the need for a fully integrated.",
      pic: emri,
      name: "Emri white",
      from: "New Jersey",
    },
    {
      description:
        "Dr. Wilson Smith, MD is a Critical Care Medicine Specialist in Spartanburg, SC and has over 45 years of experience in the medical field.  He graduated from West Virginia U, School of Medicine medical school in 1976.  He is affiliated with medical facilities Pelham Medical Center and Spartanburg Medical Center.",
      pic: wilson,
      name: "Wilson Smith",
      from: "Florida",
    },
  ];
  return (
    <section className="testimonials my-5 py-5">
      <div className="container ">
        <div className="ms-4">
          <h3
            style={{
              color: "#17D2B6",
              textTransform: "uppercase",
              fontWeight: "700",
            }}
          >
            Testimonial
          </h3>
          <h5 style={{fontWeight:'600',color:'#3F475B'}}>
            Whats are patients <br /> Says
          </h5>
        </div>
                   
                   <div className="card-deck mt-5">
                        <div className="row ">
                            {
                            testimonialData.map((testimonial) => (
                            <TestimonialCart testimonial={testimonial} key={testimonial.name}>
                            </TestimonialCart>
                        ))}
                        </div>
                    </div>
                   </div>

        
     
    </section>
  );
};

export default Testimonials;
