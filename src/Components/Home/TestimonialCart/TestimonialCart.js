import React from "react";

const TestimonialCart = (props) => {
  const { description, name, pic, from } = props.testimonial;
  return (
    
      <div className="col-md-4 card-group p-4 ">
        <div className="card shadow-sm  justify-content-center">
            <div className="card-body ">
                <p className="card-text text-center">{description}</p>
            </div>
            <div className="d-flex px-3">
                <div className="card-footer   ">
                <img className="mx-3 " width="60" src={pic} alt="" />
                </div>
                <div className="px-3 py-2">
                <h5 className="text-info">{name}</h5>
                <p className="m-0 text-secondary">{from}</p>
                </div>
            </div>
        </div>
      </div>
    
  );
};

export default TestimonialCart;
